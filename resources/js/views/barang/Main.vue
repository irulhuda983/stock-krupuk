<template>
    <div
        class="flex-auto w-full h-full box-border p-6 lg:overflow-hidden flex flex-col relative"
    >
        <div class="mb-5 w-full box-border flex items-center justify-between">
            <div class="font-bold text-gray-600 text-lg 2xl:text-2xl">
                Dataset
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
                <span class="mr-2">Dataset</span>
                <!-- <span class="mr-2">/</span> -->
            </div>
        </div>

        <div class="w-full box-border flex flex-col lg:flex-row justify-between items-center mb-5">
            <div class="w-full lg:w-1/2 relative flex items-center mb-3 2xl:mb-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 absolute text-gray-600 left-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    v-model="params.cari"
                    @change="getDataset"
                    type="text"
                    class="pl-10 w-full bg-gray-200 px-4 py-3 outline-none text-xs rounded-lg focus:shadow-lg"
                    placeholder="cari bulan lalu enter ..."
                />
            </div>

            <div class="flex items-center justify-center space-x-5">
                <form @submit.prevent="uploadFile()" class="flex">
                    <input
                        class="text-xs block w-full px-2 py-px transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed text-xs text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500"
                        type="file"
                        ref="uploadFIle"
                    />
                    <button
                        type="submit"
                        class="text-xs rounded-lg border border-gray-200 bg-gray-200 text-gray-500 font-semibold px-4 py-2 flex items-center hover:text-blue-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        <span>Import</span>
                    </button>
                </form>

                <button
                    @click.prevent="$refs.modalTambah.show()"
                    class="text-xs rounded-lg border border-gray-200 bg-gray-200 text-gray-500 font-semibold px-4 py-2 flex items-center hover:text-blue-400"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    <span>Tambah</span>
                </button>
            </div>
        </div>

        <div
            class="w-full h-full box-border overflow-auto flex flex-col bg-white pb-32 lg:pb-16"
        >
            <!-- <div class="w-full h-full box-border overflow-auto flex flex-col bg-white"> -->
            <table class="w-full table-auto text-xs lg:text-sm mb-14">
                <thead class="font-semibold text-gray-500">
                    <tr class="relative border-b shadow-md sticky top-0">
                        <th
                            class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"
                        >
                            No.
                        </th>
                        <th
                            class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"
                        >
                            Minggu Ke
                        </th>
                        <th
                            class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"
                        >
                            Bulan
                        </th>
                        <th
                            class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"
                        >
                            Tahun
                        </th>
                        <th
                            class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"
                        >
                            Persediaan
                        </th>
                        <th
                            class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"
                        >
                            Penjualan
                        </th>
                        <th
                            class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"
                        >
                            Permintaan
                        </th>
                        <th
                            class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"
                        >
                            Produksi
                        </th>
                        <th
                            width="25px"
                            class="p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"
                        >
                            Aksi
                        </th>
                    </tr>
                </thead>

                <tbody v-if="isLoading">
                    <tr>
                        <td colspan="10">
                            <div
                                class="w-full h-full box-border flex items-center justify-center mt-32"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    style="
                                        margin: auto;
                                        background: none;
                                        display: block;
                                        shape-rendering: auto;
                                    "
                                    width="200px"
                                    height="200px"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="xMidYMid"
                                >
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="32"
                                        stroke-width="8"
                                        stroke="#85a2b6"
                                        stroke-dasharray="50.26548245743669 50.26548245743669"
                                        fill="none"
                                        stroke-linecap="round"
                                    >
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            dur="1s"
                                            repeatCount="indefinite"
                                            keyTimes="0;1"
                                            values="0 50 50;360 50 50"
                                        ></animateTransform>
                                    </circle>
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="23"
                                        stroke-width="8"
                                        stroke="#bbcedd"
                                        stroke-dasharray="36.12831551628262 36.12831551628262"
                                        stroke-dashoffset="36.12831551628262"
                                        fill="none"
                                        stroke-linecap="round"
                                    >
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            dur="1s"
                                            repeatCount="indefinite"
                                            keyTimes="0;1"
                                            values="0 50 50;-360 50 50"
                                        ></animateTransform>
                                    </circle>
                                </svg>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else class="bg-white">
                    <template v-if="dataset.length <= 0">
                        <tr>
                            <td
                                colspan="10"
                                class="px-3 py-10 text-center italic font-semibold"
                            >
                                Tidak ada Data penjualan.
                            </td>
                        </tr>
                    </template>

                    <template v-else>
                        <tr v-for="(item, i) in dataset" :key="i">
                            <td
                                width="2%"
                                class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize font-semibold"
                            >
                                {{ (currentPage - 1) * perPage + 1 + i }}.
                            </td>
                            <td
                                class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"
                            >
                                {{ item.minggu_ke }}
                            </td>
                            <td
                                class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"
                            >
                                {{ item.bulan }}
                            </td>
                            <td
                                class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"
                            >
                                {{ item.tahun }}
                            </td>
                            <td
                                class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"
                            >
                                {{ item.persediaan }}
                            </td>
                            <td
                                class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"
                            >
                                {{ item.penjualan }}
                            </td>
                            <td
                                class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"
                            >
                                {{ item.permintaan }}
                            </td>
                            <td
                                class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"
                            >
                                {{ item.produksi }}
                            </td>
                            <td
                                width="25px"
                                class="px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"
                            >
                                <button
                                    @click.prevent="openModalEdit(item)"
                                    class="text-sx text-gray-400 hover:text-blue-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="3"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                </button>
                                <button
                                    @click.prevent="openModalHapus(item)"
                                    class="text-sx text-gray-400 hover:text-red-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="3"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
            <!-- </div> -->

            <div
                class="fixed lg:absolute bottom-0 right-0 left-0 box-border overflow-hidden lg:p-6 text-sm lg:pl-3 z-50"
            >
                <div
                    v-if="lastPage > 1"
                    class="w-full box-border flex items-center justify-between bg-white p-4 z-50 border-t border-gray-200"
                >
                    <div class="text-2xs lg:text-xs">
                        Show {{ perPage }} data from {{ total }}
                    </div>
                    <div>
                        <Pagination
                            :total="total"
                            :value="params.page"
                            :perPage="params.limit"
                            @set="changePage"
                        />
                    </div>
                </div>
            </div>
        </div>

        <!-- tambah -->
        <t-modal ref="modalTambah" header="Tambah Dataset">
            <div class="w-full p-3">
                <form @submit.prevent="tambahData">
                    <div class="grid grid-cols-2 gap-3">
                        <div class="w-full mb-3">
                            <label for="" class="text-xs">Minggu Ke</label>
                            <t-input v-model="payload.minggu_ke"></t-input>
                        </div>

                        <div class="w-full mb-3">
                            <label for="" class="text-xs">Bulan</label>
                            <t-input v-model="payload.bulan"></t-input>
                        </div>

                        <div class="w-full mb-3">
                            <label for="" class="text-xs">Tahun</label>
                            <t-input v-model="payload.tahun"></t-input>
                        </div>

                        <div class="w-full mb-3">
                            <label for="" class="text-xs">Penjualan</label>
                            <t-input v-model="payload.penjualan"></t-input>
                        </div>

                        <div class="w-full mb-3">
                            <label for="" class="text-xs">Permintaan</label>
                            <t-input v-model="payload.permintaan"></t-input>
                        </div>

                        <div class="w-full mb-3">
                            <label for="" class="text-xs">Persediaan</label>
                            <t-input v-model="payload.persediaan"></t-input>
                        </div>

                        <div class="w-full mb-3">
                            <label for="" class="text-xs">Produksi</label>
                            <t-input v-model="payload.produksi"></t-input>
                        </div>
                    </div>

                    <div class="w-full mb-5">
                        <t-button>Simpan</t-button>
                    </div>
                </form>
            </div>
        </t-modal>

        <!-- ubah -->
        <t-modal ref="modalEdit" header="Edit Dataset">
            <div class="w-full p-3">
                <form @submit.prevent="editData">
                    <div class="grid grid-cols-2 gap-3">
                        <div class="w-full mb-3">
                            <label for="" class="text-xs">Minggu Ke</label>
                            <t-input v-model="payload.minggu_ke"></t-input>
                        </div>

                        <div class="w-full mb-3">
                            <label for="" class="text-xs">Bulan</label>
                            <t-input v-model="payload.bulan"></t-input>
                        </div>

                        <div class="w-full mb-3">
                            <label for="" class="text-xs">Tahun</label>
                            <t-input v-model="payload.tahun"></t-input>
                        </div>

                        <div class="w-full mb-3">
                            <label for="" class="text-xs">Penjualan</label>
                            <t-input v-model="payload.penjualan"></t-input>
                        </div>

                        <div class="w-full mb-3">
                            <label for="" class="text-xs">Permintaan</label>
                            <t-input v-model="payload.permintaan"></t-input>
                        </div>

                        <div class="w-full mb-3">
                            <label for="" class="text-xs">Persediaan</label>
                            <t-input v-model="payload.persediaan"></t-input>
                        </div>

                        <div class="w-full mb-3">
                            <label for="" class="text-xs">Produksi</label>
                            <t-input v-model="payload.produksi"></t-input>
                        </div>
                    </div>

                    <div class="w-full mb-5">
                        <t-button>Simpan</t-button>
                    </div>
                </form>
            </div>
        </t-modal>

        <!-- hapus -->
        <modal ref="modalHapus">
            <div
                slot="modal-body"
                class="w-full text-xs px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
            >
                <div class="sm:flex sm:items-start">
                    <div
                        class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                    >
                        <!-- Heroicon name: outline/exclamation -->
                        <svg
                            class="h-6 w-6 text-red-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                    </div>

                    <div>
                        <div
                            class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                        >
                            <h3
                                class="text-lg leading-6 font-medium text-gray-900"
                                id="modal-title"
                            >
                                Hapus Dataset !
                            </h3>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">
                                    Apakah anda yakin ingin menghapus item ini,
                                    data yang dihapus tidak bisa dikembalikan.
                                </p>
                            </div>
                        </div>

                        <div
                            class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
                        >
                            <button
                                @click.prevent="deleteDataset()"
                                type="button"
                                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Ya, Hapus
                            </button>
                            <button
                                @click.prevent="closeModalHapus()"
                                type="button"
                                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
const Modal = () => import("@/components/Modal.vue");
const Pagination = () => import("@/components/Pagination.vue");
export default {
    name: "Barang",
    components: { Modal, Pagination },
    data() {
        return {
            isLoading: false,
            dataset: [],
            payload: {
                id: null,
                minggu_ke: "",
                bulan: "",
                tahun: "",
                persediaan: "",
                permintaan: "",
                penjualan: "",
                produksi: "",
            },
            errors: {
                minggu_ke: null,
                bulan: null,
                tahun: null,
                persediaan: null,
                permintaan: null,
                penjualan: null,
                produksi: null,
            },
            pageInfo: null,
            params: {
                cari: "",
                page: 1,
                limit: 10,
                sort: "created_at:desc",
            },
            lastPage: 0,
            total: null,
            perPage: 10,
            currentPage: null,
            disabled: true,
        };
    },

    mounted() {
        this.getDataset();
    },

    methods: {
        async getDataset() {
            try {
                let { data } = await axios.get(`dataset`, {
                    params: this.params,
                });

                this.isLoading = false;
                this.dataset = data.data;
                this.total = data.meta.total;
                this.perPage = data.meta.per_page;
                this.currentPage = data.meta.current_page;
                this.lastPage = data.meta.last_page;
            } catch (e) {
                console.log(e);
            }
        },

        changePage(page) {
            this.params.page = page;
            this.getDataset();
        },

        async uploadFile() {
            try {
                let data = new FormData();

                data.append("file", this.$refs.uploadFIle.files[0]);

                let res = await axios.post("dataset/import", data, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                if (res.status === 200) {
                    this.getDataset();
                    this.$notify({
                        group: "notif",
                        title: "Berhasil",
                        type: "success",
                        text: "Berhasil upload dataset",
                    });
                    this.$refs.uploadFIle.files[0] = null;
                }
            } catch (e) {
                console.log(e);
            }
        },

        async tambahData() {
            try {
                let res = await axios.post("dataset/store", this.payload);

                if (res.status == 200) {
                    if (res.status === 200) {
                        this.getDataset();
                        this.$refs.modalTambah.hide();
                        this.$notify({
                            group: "notif",
                            title: "Berhasil",
                            type: "success",
                            text: "Berhasil upload dataset",
                        });
                    }
                }
            } catch (e) {
                console.log(e);
            }
        },

        async editData() {
            try {
                let res = await axios.post(
                    `dataset/${this.payload.id}/update`,
                    this.payload
                );

                if (res.status == 200) {
                    if (res.status === 200) {
                        this.getDataset();
                        this.$refs.modalEdit.hide();
                        this.$notify({
                            group: "notif",
                            title: "Berhasil",
                            type: "success",
                            text: "Berhasil edit dataset",
                        });
                    }
                }
            } catch (e) {
                console.log(e);
            }
        },

        async deleteDataset() {
            try {
                let res = await axios.delete(
                    `dataset/${this.payload.id}/delete`
                );

                if (res.status == 200) {
                    if (res.status === 200) {
                        this.getDataset();
                        this.$refs.modalHapus.closeModal();
                        this.$notify({
                            group: "notif",
                            title: "Berhasil",
                            type: "success",
                            text: "Berhasil delete dataset",
                        });
                    }
                }
            } catch (e) {
                console.log(e);
            }
        },

        openModalEdit(item) {
            this.payload = item;
            this.$refs.modalEdit.show();
        },

        openModalHapus(item) {
            this.payload.id = item.id;
            this.$refs.modalHapus.showModal();
        },

        closeModalHapus() {
            this.payload.id = null;
            this.$refs.modalHapus.closeModal();
        },

        resetData() {
            this.payload = {
                id: null,
                minggu_ke: "",
                bulan: "",
                tahun: "",
                persediaan: "",
                permintaan: "",
                penjualan: "",
                produksi: "",
            };

            this.errors = {
                minggu_ke: null,
                bulan: null,
                tahun: null,
                persediaan: null,
                permintaan: null,
                penjualan: null,
                produksi: null,
            };
        },
    },
};
</script>
