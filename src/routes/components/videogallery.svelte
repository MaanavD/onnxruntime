<script lang="ts">
	export let videos: { title: string; link: string }[];
	export let title = true;
</script>

<div class="section-container section-gap">
	{#if title == true}
		<p class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Learn by watching</p>
		<h2 class="mb-2">Videos</h2>
		<p class="text-lg text-muted mb-8">Check out some of our videos to help you get started!</p>
	{/if}
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
		{#each videos as video}
			<div class="card-surface p-0 overflow-hidden">
				<iframe
					class="w-full aspect-video"
					src={video.link}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
				<div class="p-4">
					<a class="text-sm font-medium hover:text-primary transition-colors" href={video.link}>
						{video.title}
					</a>
				</div>
			</div>
		{/each}
	</div>
	{#if title == true}
		<div class="mt-8">
			<a href="https://www.youtube.com/@ONNXRuntime" class="link-arrow">
				ONNX Runtime YouTube channel →
			</a>
		</div>
	{/if}
</div>
