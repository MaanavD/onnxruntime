<script>
	import Ortcrossplatform from '../../images/undraw/image_ortcrossplatform.svelte';
</script>

<div class="section-container section-gap">
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
		<div class="hidden lg:flex justify-center order-1">
			<Ortcrossplatform />
		</div>
		<div class="order-2">
			<p class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Run anywhere</p>
			<h2 class="mb-4">Cross-Platform</h2>
			<p class="text-lg text-muted max-w-lg">
				Do you program in Python? C#? C++? Java? JavaScript? Rust? No problem. ONNX Runtime has you
				covered with support for many languages. And it runs on Linux, Windows, Mac, iOS, Android,
				and even in web browsers.
			</p>
		</div>
		<div class="lg:hidden flex justify-center order-3">
			<Ortcrossplatform />
		</div>
	</div>
</div>
