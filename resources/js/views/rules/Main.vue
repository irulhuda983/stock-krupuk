<template>
    <div class="flex-auto w-full h-full box-border p-6 overflow-hidden flex flex-col relative">
        <div class="mb-5 w-full box-border flex items-center justify-between">
            <div class="font-bold text-gray-600 text-lg 2xl:text-2xl">Rules</div>
            <div class="text-xs flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span class="mr-2">Rules</span>
                <span class="mr-2">/</span>
            </div>
        </div>

        <div class="w-full box-border flex justify-between items-center mb-5">

            <div class="w-1/2 relative flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute text-gray-600 left-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" class="pl-10 w-full bg-gray-200 px-4 py-3 outline-none text-xs rounded-lg focus:shadow-lg" placeholder="cari bulan lalu enter ...">
            </div>

            <div class="flex items-center justify-center space-x-5">
                <form @submit.prevent="uploadFile()" class="flex">
                    <input type="file" ref="uploadFIle">
                    <button type="submit" class="rounded-lg border border-gray-200 bg-gray-200 text-gray-500 font-semibold px-4 py-2 flex items-center hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Import</span>
                    </button>
                </form>

                <button @click.prevent="$refs.modalTambah.show()" class="rounded-lg border border-gray-200 bg-gray-200 text-gray-500 font-semibold px-4 py-2 flex items-center hover:text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Tambah</span>
                </button>
            </div>
        </div>

        <div class="flex justify-between w-full h-full space-x-4">
            <div class="w-full h-full box-border overflow-auto flex flex-col bg-white">
                <table class="w-full table-auto text-xs 2xl:text-sm mb-14">
                    <thead class="font-semibold text-gray-500">
                        <tr class="relative border-b shadow-md sticky top-0">
                            <th class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white">No.</th>
                            <th class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white">Aturan</th>
                            <th class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white">Penjualan</th>
                            <th class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white">Persediaan</th>
                            <th class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white">Fungsi</th>
                            <th class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white">Produksi</th>
                            <th width="25px" class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white">Aksi</th>
                        </tr>
                    </thead>

                    <tbody v-if="isLoading">
                        <tr>
                            <td colspan="10">
                                <div class="w-full h-full box-border flex items-center justify-center mt-32">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                        <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#85a2b6" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
                                        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                                        </circle>
                                        <circle cx="50" cy="50" r="23" stroke-width="8" stroke="#bbcedd" stroke-dasharray="36.12831551628262 36.12831551628262" stroke-dashoffset="36.12831551628262" fill="none" stroke-linecap="round">
                                        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
                                        </circle>
                                    </svg>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else class="bg-white">
                        <template v-if="rules.length <= 0">
                            <tr>
                                <td colspan="10" class="px-3 py-10 text-center italic font-semibold">Tidak ada Data rules.</td>
                            </tr>
                        </template>

                        <template v-else>
                            <tr v-for="(item, i) in rules" :key="i">
                                <td width="2%" class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize font-semibold">{{ i + 1 }}.</td>
                                <td class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize">{{ item.aturan }}</td>
                                <td class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize">{{ item.persediaan }}</td>
                                <td class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize">{{ item.penjualan }}</td>
                                <td class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize">=></td>
                                <td class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize">{{ item.permintaan }}</td>
                                <td width="25px" class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize">
                                    <!-- <button @click.prevent="$router.push({ name: 'DetailLaporan', params: {id: item.id }})" class="text-sx text-gray-400 hover:text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                                        </svg>
                                    </button>
                                    <button @click.prevent="$router.push({ name: 'UbahLaporan', params: {id: item.id }})" class="text-sx text-gray-400 hover:text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button @click.prevent="openModalHapus(item)" class="text-sx text-gray-400 hover:text-red-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button> -->
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>

                <!-- <div class="w-full absolute bottom-0 right-0 left-0 box-border overflow-hidden p-6 text-sm">
                    <div v-if="pageInfo != null" class="w-full box-border flex items-center justify-between bg-white p-4 z-50 border-t border-gray-200">
                        <div class="text-2xs lg:text-xs">Show {{ total > pageInfo.meta.total ? pageInfo.meta.total : total }} data from {{ pageInfo ? pageInfo.meta.total : 0}}</div>
                        <div>
                            <t-pagination
                                :total-items="pageInfo.meta.total"
                                :per-page="parseInt(pageInfo.meta.per_page)"
                                :limit="limit"
                                :disabled="disabled"
                                v-model="pageInfo.meta.current_page"
                                @change="getLaporan()"
                                v-if="pageInfo"
                            />
                        </div>
                    </div>
                </div> -->
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'Rules',
    data(){
        return {
            isLoading: false,
            rules: [
                {
                    aturan: 'R1',
                    penjualan: 'sedikit',
                    persediaan: 'sedikit',
                    permintaan: 'sedikit',
                }
            ]
        }
    }
}
</script>