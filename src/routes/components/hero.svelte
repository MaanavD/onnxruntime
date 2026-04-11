<script lang="ts">
	import { base } from '$app/paths';
	import FaRegClipboard from 'svelte-icons/fa/FaRegClipboard.svelte';
	import FaClipboardCheck from 'svelte-icons/fa/FaClipboardCheck.svelte';
	import OnnxLight from '../../images/ONNX-Light.svelte';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let words = [
		'Cross-Platform',
		'GPU',
		'Python',
		'CPU',
		'Mobile',
		'C#',
		'Edge',
		'JavaScript',
		'Java',
		'C++',
		'Browser'
	];
	let activeWord = 'Edge';
	let currentWord = 0;
	let cycleWord = () => {
		currentWord = (currentWord + 1) % words.length;
		activeWord = words[currentWord];
		setTimeout(cycleWord, currentWord === 0 ? 5000 : 3000);
	};
	setTimeout(cycleWord, 2000);

	let pythonCode = 'pip install onnxruntime';
	let gaiCode = 'pip install onnxruntime-genai';

	let copiedIndex: number | null = null;
	let copy = async (code: string, index: number) => {
		try {
			copiedIndex = index;
			setTimeout(() => {
				copiedIndex = null;
			}, 2500);
			await navigator.clipboard.writeText(code);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};
</script>

<section
	role="main"
	class="relative overflow-hidden bg-base-100"
>
	<!-- Subtle dot grid background -->
	<div class="hero-dot-grid" aria-hidden="true"></div>

	<div class="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-36">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
			<!-- Left content — spans wider -->
			<div class="lg:col-span-7 xl:col-span-8">
				<h1 class="font-display font-bold tracking-tight" style="font-size: var(--text-4xl); line-height: 1.08;">
					Accelerated
					{#key activeWord}
						<span
							class="text-primary inline-block"
							in:fade={{ duration: 600, easing: cubicOut }}
						>{activeWord}</span>
					{/key}
					<br />Machine Learning
				</h1>

				<p class="font-body mt-6 max-w-xl" style="font-size: var(--text-lg); color: var(--fallback-bc,oklch(var(--bc)/0.65));">
					Production-grade AI engine that accelerates training and inferencing across your existing technology stack.
				</p>

				<!-- Install commands -->
				<div class="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl">
					<div class="group flex items-center rounded-lg bg-base-200/70 border border-base-300/60 flex-1 overflow-hidden transition-colors duration-200 hover:border-primary/30">
						<code class="font-mono text-sm px-4 py-3 flex-1 select-all text-base-content/85">{pythonCode}</code>
						<button
							aria-label="Copy pip install onnxruntime"
							on:click={() => copy(pythonCode, 0)}
							class="px-3 py-3 text-base-content/40 hover:text-primary border-l border-base-300/60 transition-colors duration-200"
						>
							<span class="w-4 h-4 block">
								{#if copiedIndex === 0}
									<FaClipboardCheck />
								{:else}
									<FaRegClipboard />
								{/if}
							</span>
						</button>
					</div>

					<div class="group flex items-center rounded-lg bg-base-200/70 border border-base-300/60 flex-1 overflow-hidden transition-colors duration-200 hover:border-primary/30">
						<code class="font-mono text-sm px-4 py-3 flex-1 select-all text-base-content/85">{gaiCode}</code>
						<button
							aria-label="Copy pip install onnxruntime-genai"
							on:click={() => copy(gaiCode, 1)}
							class="px-3 py-3 text-base-content/40 hover:text-primary border-l border-base-300/60 transition-colors duration-200"
						>
							<span class="w-4 h-4 block">
								{#if copiedIndex === 1}
									<FaClipboardCheck />
								{:else}
									<FaRegClipboard />
								{/if}
							</span>
						</button>
					</div>
				</div>

				<p class="mt-6 font-body text-sm">
					<a
						class="text-base-content/50 hover:text-primary transition-colors duration-200 inline-flex items-center gap-1.5"
						href="./getting-started"
					>
						Interested in other languages? See all we support
						<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</a>
				</p>
			</div>

			<!-- Right side — ONNX logo -->
			<div class="hidden lg:flex lg:col-span-5 xl:col-span-4 justify-center items-center">
				<div class="hero-logo-wrap transition-transform duration-700 ease-out hover:rotate-12 hover:scale-105">
					<OnnxLight width={220} height={220} />
				</div>
			</div>
		</div>
	</div>

	<!-- Copied toast -->
	{#if copiedIndex !== null}
		<div
			class="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-base-200 border border-base-300/60 shadow-lg font-body text-sm text-base-content/80"
			transition:fade={{ duration: 250 }}
			role="alert"
		>
			<span class="w-4 h-4 text-success"><FaClipboardCheck /></span>
			Copied to clipboard
		</div>
	{/if}
</section>

<style>
	.hero-dot-grid {
		position: absolute;
		inset: 0;
		background-image: radial-gradient(circle, oklch(0.55 0.02 200 / 0.08) 1px, transparent 1px);
		background-size: 28px 28px;
		pointer-events: none;
	}
</style>
