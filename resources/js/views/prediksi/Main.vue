<template>
    <div class="flex-auto w-full h-full box-border p-6 overflow-hidden flex flex-col relative">
        <div class="mb-5 w-full box-border flex items-center justify-between">
            <div class="font-bold text-gray-600 text-lg 2xl:text-2xl">Prediksi Stock</div>
            <div class="text-xs flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span class="mr-2">Prediksi</span>
                <span class="mr-2">/</span>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'Prediksi',
    data(){
        return {
            isLoading: false,
        }
    }
}
</script>