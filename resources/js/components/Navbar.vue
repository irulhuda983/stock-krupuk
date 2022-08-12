<template>
    <div id="navbar" class="w-full flex items-center justify-between box-border px-7 bg-white overflow-hidden z-40 border-b border-gray-100 text-xs 2xl:text-base">
        <div class="flex space-x-5 items-center">
            <div id="logo" class="h-12 2xl:h-14">
                <img src="/images/logo-betakun.png" alt="" class="h-full" />
            </div>
            <span class="hidden lg:block font-semibold text-base 2xl:text-xl tracking-wide">PREDIKSI STOCK</span>
        </div>

        <div class="flex items-center">
        

                <div class="flex items-center justify-center space-x-4">
                    <span class="capitalize font-semibold">nama</span>
                    <div class="w-12 h-12 rounded-full overflow-hidden flex justify-center items-center">
                        <img src="user.png" alt="" class="h-full object-cover" />
                    </div>
                </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    // data(){
    //     return {
    //         user: {
    //             nama: null,
    //             foto: null,
    //         },
    //     }
    // },
    // created(){
    //     this.getUser()
    // },
    // methods: {
    //     async getUser(){
    //         try{
    //             let res = await axios.get('profil')
    //             this.user = res.data.data
    //         }catch(e){
    //             if(e.response.status === 401 ){
    //                 this.$store.dispatch('auth/clear')
    //             }
    //         }
    //     }
    // },
}
</script>
Footer