<script>
	import { base } from '$app/paths';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte';
	import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
	export let pathvar = '.';
</script>

<footer class="footer py-16 px-6 md:px-10 text-base-content z-40 border-t border-base-300">
	<div>
		<p class="font-display text-lg">ONNX Runtime</p>
		<p class="text-base-content/60 text-sm">Copyright © Microsoft. All rights reserved.</p>
		<span class="font-body text-sm uppercase tracking-widest text-base-content/50 mt-4 block">Follow us at:</span>
		<div class="grid grid-flow-col gap-4 mt-2">
			<a aria-label="youtube" href="https://www.youtube.com/onnxruntime" target="_blank"
				><div class="w-8 h-8 pt-0.5 text-base-content/60 hover:text-base-content transition-colors"><FaYoutube /></div></a
			>
			<a aria-label="linkedin" href="https://www.linkedin.com/company/onnxruntime" target="_blank"
				><div class="w-8 h-8 text-base-content/60 hover:text-base-content transition-colors"><FaLinkedinIn /></div></a
			>
			<a aria-label="github" href="https://github.com/microsoft/onnxruntime" target="_blank"
				><div class="w-8 h-8 text-base-content/60 hover:text-base-content transition-colors"><FaGithub /></div></a
			>
		</div>
	</div>
	<div />
	<div>
		<span class="font-body text-sm uppercase tracking-widest text-base-content/50">Get Started</span>
		<a href={pathvar + '/getting-started'} class="text-base-content/60 hover:text-base-content transition-colors">Install</a>
		<a href={pathvar + '/pytorch'} class="text-base-content/60 hover:text-base-content transition-colors">PyTorch</a>
	</div>
	<div>
		<span class="font-body text-sm uppercase tracking-widest text-base-content/50">Resources</span>
		<a href={pathvar + '/blogs'} class="text-base-content/60 hover:text-base-content transition-colors">Blogs</a>
		<a rel="external" href={pathvar + '/docs/tutorials'} class="text-base-content/60 hover:text-base-content transition-colors">Tutorials</a>
		<a rel="external" href={pathvar + '/docs/api/'} class="text-base-content/60 hover:text-base-content transition-colors">APIs</a>
	</div>
</footer>
