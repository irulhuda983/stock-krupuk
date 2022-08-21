<template>
    <div
        class="flex-auto w-full h-full box-border p-6 overflow-hidden flex flex-col relative"
    >
        <div class="mb-5 w-full box-border flex items-center justify-between">
            <div class="font-bold text-gray-600 text-lg 2xl:text-2xl">
                Prediksi Stock
            </div>
            <div class="text-xs flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                </svg>
                <span class="mr-2">Prediksi</span>
                <span class="mr-2">/</span>
            </div>
        </div>

        <div class="w-full h-full box-border overflow-auto flex flex-col bg-white" v-if="isPrediksi == false">
            <div class="p-8 w-full 2xl:w-1/2">
                <div class="mb-2 border-b">
                    <h1>Masukkan Data yang akan diprediksi</h1>
                </div>
                <form @submit.prevent="getData()">
                    <div>
                        <div class="mb-3">
                            <label for="" class="text-xs">Permintaan</label>
                            <t-input v-model="params.permintaan"></t-input>
                        </div>

                        <div class="mb-3">
                            <label for="" class="text-xs">Penjualan</label>
                            <t-input v-model="params.penjualan"></t-input>
                        </div>

                        <div class="mb-3">
                            <label for="" class="text-xs">Persediaan</label>
                            <t-input v-model="params.persediaan"></t-input>
                        </div>

                        <div class="mb-3">
                            <t-button type="submit">Prediksi</t-button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="w-full h-full box-border overflow-auto bg-white" v-else>
            <div class="flex flex-col lg:flex-row items-start justify-between w-full overflow-hidden">
                <div class="p-4 w-full lg:w-2/5">
                    <h1 class="font-semibold text-gray-500 mb-3">Fuzzyfikasi</h1>
                    <div class="w-full">
                        <table class="w-full table-auto text-xs 2xl:text-sm mb-14">
                            <thead class="font-semibold text-gray-500">
                                <tr>
                                    <th class="p-3 whitespace-nowrap capitalize border border-gray-200 text-left bg-white" rowspan="2">Nama</th>
                                    <th class="p-3 whitespace-nowrap capitalize border border-gray-200 text-center bg-white" colspan="3">Nilai</th>
                                </tr>
                                <tr>
                                    <th class="p-3 whitespace-nowrap capitalize border border-gray-200 text-center bg-white">Sedikit</th>
                                    <th class="p-3 whitespace-nowrap capitalize border border-gray-200 text-center bg-white">Sedang</th>
                                    <th class="p-3 whitespace-nowrap capitalize border border-gray-200 text-center bg-white">Banyak</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-left">Persediaan</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ format(fuzzyfikasi.persediaan.sedikit )}}</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ format(fuzzyfikasi.persediaan.sedang )}}</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ format(fuzzyfikasi.persediaan.banyak )}}</td>
                                </tr>
                                <tr>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-left">Permintaan</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ format(fuzzyfikasi.permintaan.sedikit )}}</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ format(fuzzyfikasi.permintaan.sedang )}}</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ format(fuzzyfikasi.permintaan.banyak )}}</td>
                                </tr>
                                <tr>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-left">Penjualan</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ format(fuzzyfikasi.penjualan.sedikit )}}</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ format(fuzzyfikasi.penjualan.sedang )}}</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ format(fuzzyfikasi.penjualan.banyak )}}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

                <div class="p-4 w-full lg:w-2/5">
                    <h1 class="font-semibold text-gray-500 mb-3">Nilai Penentu</h1>
                    <div class="w-full">
                        <table class="w-full table-auto text-xs 2xl:text-sm mb-14">
                            <thead class="font-semibold text-gray-500">
                                <tr>
                                    <th class="p-3 whitespace-nowrap capitalize border border-gray-200 text-left bg-white" rowspan="2">Nama</th>
                                    <th class="p-3 whitespace-nowrap capitalize border border-gray-200 text-center bg-white" colspan="3">Nilai</th>
                                </tr>
                                <tr>
                                    <th class="p-3 whitespace-nowrap capitalize border border-gray-200 text-center bg-white">Sedikit</th>
                                    <th class="p-3 whitespace-nowrap capitalize border border-gray-200 text-center bg-white">Sedang</th>
                                    <th class="p-3 whitespace-nowrap capitalize border border-gray-200 text-center bg-white">Banyak</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-left">Persediaan</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ variable.persediaan.min }}</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ variable.persediaan.mid }}</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ variable.persediaan.max }}</td>
                                </tr>
                                <tr>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-left">Permintaan</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ variable.permintaan.min }}</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ variable.permintaan.mid }}</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ variable.permintaan.max }}</td>
                                </tr>
                                <tr>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-left">Penjualan</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ variable.penjualan.min }}</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ variable.penjualan.mid }}</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ variable.penjualan.max }}</td>
                                </tr>
                                <tr>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-left">Produksi</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ variable.produksi.min }}</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ variable.produksi.mid }}</td>
                                    <td class="px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center">{{ variable.produksi.max }}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

                <div class="px-4 py-12 w-full lg:w-1/5 flex items-center justify-center flex-col">
                    <div class="w-full h-52 bg-blue-500 text-white flex flex-col items-center justify-center text-white font-bold space-y-2">
                        <div>HASIL</div>
                        <div>{{ format(defuzzyfikasi.hasil) }}</div>
                    </div>
                </div>
            </div>

            <div class="w-full overflow-hidden p-4 box-border">
                <h1 class="font-semibold text-gray-500 mb-3">Inferensi</h1>
                <table class="w-full table-auto text-xs 2xl:text-sm mb-14">
                    <thead class="font-semibold text-gray-500">
                        <tr class="relative border-b shadow-md sticky top-0">
                            <th class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white">No.</th>
                            <th class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white">Rule</th>
                            <th class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white">Permintaan</th>
                            <th class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white">Penjualan</th>
                            <th class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white">Persediaan</th>
                            <th class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white">ai</th>
                            <th class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white">zi</th>
                            <th class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white">ai * zi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, i) in inferensi" :key="i">
                                <td width="2%" class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize font-semibold">{{ i + 1 }}.</td>
                                <td class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize">{{ item.nama }}</td>
                                <td class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize">{{ format(item.permintaan) }}</td>
                                <td class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize">{{ format(item.penjualan) }}</td>
                                <td class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize">{{ format(item.persediaan) }}</td>
                                <td class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize">{{ format(item.predikat) }}</td>
                                <td class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize">{{ format(item.hasil_predikat) }}</td>
                                <td class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize">{{ format(item.perkalian) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Prediksi",
    data() {
        return {
            isLoading: false,
            isPrediksi: false,
            variable: [],
            fuzzyfikasi: [],
            inferensi: [],
            defuzzyfikasi: {},
            params: {
                permintaan: '',
                persediaan: '',
                persediaan: '',
            }
        };
    },
    methods: {
        async getData(){
            try{
                let { data } = await axios.get('prediksi/show-prediksi', {params: this.params})

                this.variable = data.variable
                this.fuzzyfikasi = data.fuzzyfikasi
                this.inferensi = data.inferensi
                this.defuzzyfikasi = data.defuzzyfikasi
                this.isPrediksi = true
            }catch(e){
                console.log(e)
                this.isPrediksi = false
            }
        },
        format(n){
            let angka = parseFloat(n)
            return angka.toFixed(2)
        },
    }
};
</script>
