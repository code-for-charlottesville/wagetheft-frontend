<template>
	<div class="dropdown-menu">
		<label v-if="label">{{label}}</label>
		<button
			ref="topButton"
			@click.prevent="toggleOpen"
			:class="selectorClass"
			:aria-label="alt"
			:disabled="disabled"
			@blur="blur"
			@keydown.arrow-down.prevent="toggleOpen"
			@keydown.arrow-up.prevent="toggleOpen"
		>
			<span v-html="selectedText"></span>
		</button>
		<transition name="slide-fade">
			<ul ref="options" class="dropdown" v-if="showDropDown" v-click-outside="vcoConfig">
				<li v-for="option in options" :key="option.value">
					<button
						@click.prevent="onclick(option.value)"
						:class="currentSelection === option.value ? 'selected' : ''"
						@keydown.home.prevent="focusFirst"
						@keydown.end.prevent="focusLast"
						@keydown.page-up.prevent="focusFirst"
						@keydown.page-down.prevent="focusLast"
						@keydown.arrow-down.prevent="focusNext"
						@keydown.arrow-up.prevent="focusPrevious"
						@keydown.tab.prevent="swallow"
					>
						<span v-html="option.label"></span>
					</button>
				</li>
				<li class="shortcut-actions">
					<button v-shortkey="['esc']" @shortkey="onClickOutside"></button>
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
	import vClickOutside from 'v-click-outside';

	export default {
		name: 'dropdown-menu',
		directives: {
			clickOutside: vClickOutside.directive
		},
		data() {
			return {
				showDropDown: false,
				vcoConfig: {
					handler: this.onClickOutside,
					events: ['click']
				},
			};
		},
		props: {
			label: {
				type: String,
				required: false,
			},
			options: {
				type: Array,
				required: true,
			},
			alt: {
				type: String,
				required: true,
			},
			disabled: {
				type: Boolean,
				default: false,
				required: false,
			},
			currentSelection: {
				type: String,
				default: "",
				required: false,
			},
		},
		computed: {
			selectedText() {
				const option = this.options.find(option => {
					return this.currentSelection === option.value;
				});
				if (option)
					return option.label;
				return this.currentSelection;
			},
			selectorClass() {
				let classes = ['selector'];
				if (this.showDropDown)
					classes.push('open');
				if (!this.disabled)
					classes.push('enabled');
				return classes.join(" ");
			},
		},
		methods: {
			onClickOutside(ev) {
				this.showDropDown = false;
				this.$emit("dropDownState", {isOpen: this.showDropDown});
			},
			toggleOpen(ev) {
				this.showDropDown = !this.showDropDown;
				this.$emit("dropDownState", {isOpen: this.showDropDown});
				if (this.showDropDown) {
					const target = ev.currentTarget.parentNode;
					setTimeout(function () {
						const selected = target.querySelector('button.selected');
						if (selected) {
							selected.focus();
						} else {
							if (ev.target)
								ev.target.focus();
						}
					}, 500);
				}
			},
			onclick(value) {
				this.showDropDown = false;
				this.$emit('click', { selection: value });
			},
			blur(event) {
				this.$emit('blur', event);
			},
			swallow() {
			},
			focusItem(index) {
				if (this.$refs.options) {
					const nextIndex = `[data-index="${index}"]`;
					const nextOption = this.$refs.options.querySelector(nextIndex);
					if (nextOption)
						nextOption.focus();
				}
			},
			focusFirst() {
				this.focusItem(0);
			},
			focusLast() {
				this.focusItem(this.options.length-1);
			},
			focusNext() {
				const thisIndex = document.activeElement.dataset.index;
				if (thisIndex || thisIndex === '0')
					this.focusItem(parseInt(thisIndex, 10)+1);
			},
			focusPrevious() {
				const thisIndex = document.activeElement.dataset.index;
				if (thisIndex)
					this.focusItem(parseInt(thisIndex, 10)-1);
			},
		}
	};
</script>

<style scoped lang="scss">
	@import "~/assets/css/variables.scss";

	.dropdown-menu {
		position: relative;
		width: 120px;

		label {
			display: block;
			font-size: 13px;
		}

		.dropdown {
			width: 120px;
		}

		button.selector {
			background: white;
			@include boxShadow-button;
			border-radius: 6px;
			margin-top: 5px;
			font-size: 20px;
		}
	}

	button {
		background: transparent;
		text-align: left;
		border: none;
		width: 100%;
		font-size: 16px;
	}

	.selector.enabled {
		&:after {
			content: '∨';
			float: right;
			transition: transform 0.5s;
		}
	}

	.open:after {
		transform: rotate(180deg);
	}

	.dropdown {
		list-style: none;
		position: absolute;
		background-color: $popup-background;
		@include boxShadow-popup;
		padding: 5px;
		z-index: 5;
		margin-bottom: 70px;

		li {
			button {
				padding: 5px 0 0 25px;
			}

			&:hover {
				background-color: $list-hover-background;
			}
		}

		button:disabled {
			background-color: $disabled-button-background;
			font-style: italic;
		}
	}

	.selected {
		background: $selected-background;
		color: $selected-color;
		position: relative;

		&:before {
			content: '✓';
			position: absolute;
			left: 5px;
		}
	}

	.slide-fade-enter-active {
		transition: all 0.3s ease;
	}

	.slide-fade-leave-active {
		transition: all 0.2s ease;
	}

	.slide-fade-enter {
		transform: translateY(-50px);
		opacity: 0;
	}

	.slide-fade-leave-to {
		transform: translateY(-50px);
		opacity: 0;
	}
</style>
