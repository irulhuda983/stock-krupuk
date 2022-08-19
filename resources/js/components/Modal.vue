<template>
    <div class="w-screen h-screen box-border overflow-hidden bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl fixed top-0 z-50 left-0 right-0 bottom-0 flex items-center justify-center p-7 md:p-20 lg:p-32 xl:p-62" v-show="show">
        <div class="w-full lg:w-1/2 box-border bg-white rounded shadow-2xl text-grayLight flex flex-col items-center justify-center relative">
            <slot name="modal-body"></slot>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show: false,
        }
    },
    methods: {
        showModal(){
            this.show = true
        },
        closeModal(){
            this.show = false
        }
    }
}
</script>