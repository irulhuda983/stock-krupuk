<template>
    <div class="w-screen h-screen box-border overflow-x-hidden flex items-center justify-center text-gray-700">

        <div class="w-full h-full box-border flex items-center justify-center lg:space-x-5 p-8 lg:p-32">

            <div class="box-border w-full lg:w-1/2 box-border">
                <div class="flex items-center mb-12">
                    <div class="w-full">
                        <div class="text-base lg:text-2xl uppercase font-bold lg:mb-6">Login Akun</div>
                        <div class="text-2xl lg:text-4xl font-semibold lg:font-bold">
                            PREDIKSI STOCK
                        </div>
                        <div class="text-2xs lg:text-sm mb-3">Aplikasi Untuk memprediksi stock barang</div> 
                        <div class="text-2xs lg:text-sm">Masukkan username dan password untuk melanjutkan.</div>
                    </div>
                </div>

                <div class="w-full lg:w-3/4 2xl:w-96 rounded-xl bg-red-50 border border-red-200 box-border px-4 py-4 mb-3 text-2xs text-red-400 font-semibold capitalize" v-if="errors.kredensial">
                    {{ errors.kredensial }}
                </div>

                <form @submit.prevent="logIn">
                    <div class="mb-5 w-full lg:w-3/4 2xl:w-96">
                        <div class="relative flex items-center">
                            <label for="" class="absolute top-2 left-6 text-xs lg:text-sm font-semibold block">Username</label>
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-5 lg:w-6 absolute left-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                            </svg> -->
                            <input
                                type="text" v-model="payload.username" class="w-full rounded-2xl border bg-gray-200 pt-8 px-6 py-2 text-xs lg:text-sm focus:bg-white outline-none focus:border-blue-500 focus:outline"
                                :class="errors.password ? 'bg-red-200' : 'bg-gray-200'"
                                @focus="errors.username = null"
                            >
                        </div>
                        <div class="text-2xs text-red-500">{{ errors.username }}</div>
                    </div>
                    <div class="mb-5 w-full lg:w-3/4 2xl:w-96">
                        <div class="relative flex items-center">
                            <label for="" class="absolute top-2 left-6 text-xs lg:text-sm font-semibold block">password</label>
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-5 lg:w-6 absolute left-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg> -->
                            <input
                                @focus="errors.password = null"
                                :type="showPassword ? 'text':'password'"
                                v-model="payload.password"
                                class="w-full rounded-2xl border bg-gray-200 pt-8 px-6 py-2 text-xs lg:text-sm focus:bg-white outline-none focus:border-blue-500 focus:outline"
                                :class="errors.password ? 'bg-red-200' : 'bg-gray-200'"
                            >
                            <a href="#" @click.prevent="showPassword = !showPassword" class="w-5 lg:w-6 absolute right-4">
                                <svg v-if="showPassword == false" xmlns="http://www.w3.org/2000/svg" class="w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>

                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                </svg>
                            </a>
                        </div>
                        <div class="text-2xs text-red-500">{{ errors.password }}</div>
                    </div>
                    <button v-if="loading" class="w-full lg:w-auto inline-block lg:mt-6 tracking-wide box-border py-4 px-24 rounded-full bg-blue-300 text-white uppercase font-bold text-sm lg:text-base cursor-not-allowed" type="button">memproses</button>
                    <button v-else class="w-full lg:w-auto inline-block lg:mt-6 tracking-wide box-border py-4 px-24 rounded-full bg-blue-500 text-white uppercase font-bold text-sm lg:text-base" type="submit">login</button>
                </form>
            </div>

            <div class="hidden lg:block box-border w-1/2 h-full">
                <div class="w-full h-full box-border flex flex-col items-center justify-center">

                    <div class="w-full box-border flex flex-col justify-center items-center">
                        <img src="/images/new_logo.png" alt="" class="w-full">
                        <!-- <div>Aplikasi Untuk memprediksi stock barang</div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    name: 'Login',
    data(){
        return {
            loading: false,
            showPassword: false,
            payload: {
                username: '',
                password: '',
            },
            errors: {
                username: null,
                password: null,
                kredensial: null,
            },
        }
    },
    methods: {
        ...mapActions({
            signIn: "auth/signIn",
        }),
        logIn(){
            this.loading = true
            this.signIn(this.payload)
            .then(() => {
                // this.loading = false
                // this.$router.replace({ name: "Dashboard" });
                location.reload()
            })
            .catch(e => {
                this.loading = false
                    if (e.response.status == 422) {
                        let err = e.response.data.errors
                        this.errors.username = err.username ? err.username[0] : null
                        this.errors.password = err.password ? err.password[0] : null
                    }
                    if(e.response.status == 401){
                        let err = e.response.data
                        this.errors.kredensial = err.message ? err.message : null
                    }
            })
        }
    }
}
</script>