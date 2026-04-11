<script>
	import { base } from '$app/paths';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte';
	import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
	export let pathvar = '.';
</script>

<footer class="border-t border-base-300 mt-20">
	<div class="section-container py-12">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-10">
			<div class="md:col-span-2">
				<p class="font-display font-bold text-lg mb-2">ONNX Runtime</p>
				<p class="text-sm text-muted max-w-xs">
					Cross-platform, high-performance ML inferencing and training accelerator.
				</p>
				<div class="flex gap-4 mt-4">
					<a aria-label="youtube" href="https://www.youtube.com/onnxruntime" target="_blank"
						class="w-5 h-5 text-muted hover:text-primary transition-colors"><FaYoutube /></a>
					<a aria-label="linkedin" href="https://www.linkedin.com/company/onnxruntime" target="_blank"
						class="w-5 h-5 text-muted hover:text-primary transition-colors"><FaLinkedinIn /></a>
					<a aria-label="github" href="https://github.com/microsoft/onnxruntime" target="_blank"
						class="w-5 h-5 text-muted hover:text-primary transition-colors"><FaGithub /></a>
				</div>
			</div>
			<div>
				<p class="text-xs font-semibold uppercase tracking-widest text-muted mb-3">Get Started</p>
				<ul class="space-y-2 text-sm">
					<li><a href={pathvar + '/getting-started'} class="hover:text-primary transition-colors">Install</a></li>
					<li><a href={pathvar + '/pytorch'} class="hover:text-primary transition-colors">PyTorch</a></li>
					<li><a rel="external" href={pathvar + '/docs/get-started'} class="hover:text-primary transition-colors">Quickstart</a></li>
				</ul>
			</div>
			<div>
				<p class="text-xs font-semibold uppercase tracking-widest text-muted mb-3">Resources</p>
				<ul class="space-y-2 text-sm">
					<li><a href={pathvar + '/blogs'} class="hover:text-primary transition-colors">Blogs</a></li>
					<li><a rel="external" href={pathvar + '/docs/tutorials'} class="hover:text-primary transition-colors">Tutorials</a></li>
					<li><a rel="external" href={pathvar + '/docs/api/'} class="hover:text-primary transition-colors">APIs</a></li>
				</ul>
			</div>
		</div>
		<div class="border-t border-base-300 mt-10 pt-6">
			<p class="text-xs text-muted">Copyright © Microsoft. All rights reserved.</p>
		</div>
	</div>
</footer>
