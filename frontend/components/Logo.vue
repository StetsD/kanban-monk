<template>
    <a href="/" class="logo">
        <img src="img/elems/logo.svg" class="logo__path logo__path_full" alt="Kanban Monk logo" />
		<img src="img/elems/logo-m.svg" class="logo__path logo__path_simple active" alt="Kanban Monk logo" />
    </a>
</template>

<style lang="scss">
@import '../assets/css/tool/mixins';

	.logo{
		display: block;
	    width: 238px;
	    height: 22px;
        margin: 47px 0 0 31px;
		position: relative;

		&__path{
			position: absolute;
			@include opacity(0);
			visibility: hidden;
			@include transition(all 0.6s ease);
			&.active{
				@include opacity(1);
				visibility: visible;
			}
		}

		&__path_simple.active{
			@include animationTemp(logo-a, 1.2s, 1.0s, ease-in);
		    animation-fill-mode: forwards;
		    @-webkit-keyframes logo-a {
				0% {@include rotate(0deg); left: 0px;}
				5% {left: 5px; @include rotate(-40deg);}
				65% {left: 172px; @include rotate(30deg);}
				70% {@include rotate(0deg); left: 172px; @include opacity(1); visibility: visible;}
				100% {@include opacity(0); visibility: hidden;}
		    }
		    @-moz-keyframes logo-a {
				0% {@include rotate(0deg); left: 0px;}
				5% {left: 5px; @include rotate(-40deg);}
				65% {left: 172px; @include rotate(30deg);}
				70% {@include rotate(0deg); left: 172px; @include opacity(1); visibility: visible;}
				100% {@include opacity(0); visibility: hidden;}
		    }
		    @-o-keyframes logo-a {
				0% {@include rotate(0deg); left: 0px;}
				5% {left: 5px; @include rotate(-40deg);}
				65% {left: 172px; @include rotate(30deg);}
				70% {@include rotate(0deg); left: 172px; @include opacity(1); visibility: visible;}
				100% {@include opacity(0); visibility: hidden;}
		    }
		    @-ms-keyframes logo-a {
				0% {@include rotate(0deg); left: 0px;}
				5% {left: 5px; @include rotate(-40deg);}
				65% {left: 172px; @include rotate(30deg);}
				70% {@include rotate(0deg); left: 172px; @include opacity(1); visibility: visible;}
				100% {@include opacity(0); visibility: hidden;}
		    }
		    @keyframes logo-a {
				0% {@include rotate(0deg); left: 0px;}
				5% {left: 5px; @include rotate(-40deg);}
				65% {left: 172px; @include rotate(30deg);}
				70% {@include rotate(0deg); left: 172px; @include opacity(1); visibility: visible;}
				100% {@include opacity(0); visibility: hidden;}
		    }
		}

		&__path_full{
			@include animationTemp(logo-a-full, 0.2s, 1.8s, ease-out);
			animation-fill-mode: forwards;
			@-webkit-keyframes logo-a-full {
				0% {@include opacity(0); visibility: hidden;}
				100% {@include opacity(1); visibility: visible;}
		    }
		    @-moz-keyframes logo-a-full {
				0% {@include opacity(0); visibility: hidden;}
				100% {@include opacity(1); visibility: visible;}
		    }
		    @-o-keyframes logo-a-full {
				0% {@include opacity(0); visibility: hidden;}
				100% {@include opacity(1); visibility: visible;}
		    }
		    @-ms-keyframes logo-a-full {
				0% {@include opacity(0); visibility: hidden;}
				100% {@include opacity(1); visibility: visible;}
		    }
		    @keyframes logo-a-full {
				0% {@include opacity(0); visibility: hidden;}
				100% {@include opacity(1); visibility: visible;}
		    }
		}
	}

</style>
