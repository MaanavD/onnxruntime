<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import anime from 'animejs';
	import { text } from '@sveltejs/kit';
	import { Highlight } from 'svelte-highlight';
	import { bash } from 'svelte-highlight/languages';
	import FaRegClipboard from 'svelte-icons/fa/FaRegClipboard.svelte';
	import FaClipboardCheck from 'svelte-icons/fa/FaClipboardCheck.svelte'
	import OnnxLight from '../../images/ONNX-Light.svelte';
	import OnnxDark from '../../images/ONNX-Dark.svelte';
	import { fade } from 'svelte/transition';
	import { quartInOut } from 'svelte/easing';

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
		if (currentWord == 0) {
			setTimeout(cycleWord, 5000);
		} else {
			setTimeout(cycleWord, 3000);
		}
	};
	setTimeout(cycleWord, 2000);
	let pythonCode = 'pip install onnxruntime';
	let gaiCode = 'pip install onnxruntime-genai';
	let copied = false;
	let copy = async (code: string) => {
		try {
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 3000);
			await navigator.clipboard.writeText(code);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};
</script>

{#if copied}
	<div class="toast toast-top top-14 z-50" role="alert">
		<div class="alert bg-base-200 border border-base-300 shadow-lg">
			<div class="icon" style="width: 16px; height: 16px;">
				<FaClipboardCheck />
			</div>
			<span>Copied to clipboard</span>
		</div>
	</div>
{/if}
<div role="main" class="bg-base-200/50">
	<div class="section-container py-20 md:py-28 lg:py-36">
		<div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
			<div class="lg:col-span-3">
				<p class="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Open-source ML inference engine</p>
				<h1 class="mb-6">
					Accelerated
					{#key activeWord}
						<span
							class="text-primary inline-block"
							in:fade={{ delay: 0, duration: 800, easing: quartInOut }}
						>
							{activeWord}
						</span>
					{/key}
					<br />
					Machine Learning
				</h1>
				<p class="text-lg text-muted max-w-xl mb-8">
					Production-grade AI engine to speed up training and inferencing in your existing
					technology stack.
				</p>
				<div class="flex flex-col sm:flex-row gap-3 mb-6">
					<div class="flex items-stretch bg-base-100 border border-base-300 rounded-lg overflow-hidden">
						<div class="px-4 py-2.5 font-mono text-sm flex items-center">
							<span class="text-primary select-none mr-2">$</span>{pythonCode}
						</div>
						<button
							aria-label="copy python code"
							on:click={() => copy(pythonCode)}
							class="px-3 border-l border-base-300 hover:bg-base-200 transition-colors"
							><span class="w-4 h-4 block"><FaRegClipboard /></span></button
						>
					</div>
					<div class="flex items-stretch bg-base-100 border border-base-300 rounded-lg overflow-hidden">
						<div class="px-4 py-2.5 font-mono text-sm flex items-center">
							<span class="text-primary select-none mr-2">$</span>{gaiCode}
						</div>
						<button
							aria-label="copy genai code"
							on:click={() => copy(gaiCode)}
							class="px-3 border-l border-base-300 hover:bg-base-200 transition-colors"
							><span class="w-4 h-4 block"><FaRegClipboard /></span></button
						>
					</div>
				</div>
				<a class="link-arrow text-sm" href="./getting-started"
					>Interested in other languages? See the many we support →</a
				>
			</div>
			<div class="hidden lg:flex lg:col-span-2 justify-center">
				<div class="hover:rotate-180 transition duration-700 ease-out">
					<OnnxLight width={280} height={280} />
				</div>
			</div>
		</div>
	</div>
</div>
