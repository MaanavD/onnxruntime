<script lang="ts">
	export let videos: { title: string; link: string }[];
	export let px = 10;
	export let my = 10;
	export let title = true;
</script>

<section class="max-w-7xl mx-auto px-6 md:px-10 py-16 lg:py-24">
	{#if title == true}
		<h2 class="font-display tracking-tight text-4xl lg:text-5xl">Videos</h2>
		<p class="text-xl text-base-content/70 mt-3 mb-10">Check out some of our videos to help you get started!</p>
	{/if}
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
		{#each videos as video}
			<div class="flex flex-col gap-3">
				<iframe
					class="aspect-video w-full rounded-lg"
					src={video.link}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
				<a class="font-body text-base text-base-content/70 hover:text-base-content transition-colors" href={video.link}>
					{video.title}
				</a>
			</div>
		{/each}
	</div>
	{#if title == true}
		<a href="https://www.youtube.com/@ONNXRuntime" class="btn btn-primary rounded-lg mt-10">
			ONNX Runtime YouTube channel →
		</a>
	{/if}
</section>
