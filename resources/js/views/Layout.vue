<template>
    <div class="w-screen h-screen box-border overflow-x-hidden text-[#434343] bg-gray-100 overflow-hidden flex flex-col justify-between">
        <notifications group="notif" />
        <Navbar />
        <div id="content" class="w-full h-full flex flex-col lg:flex-row justify-between items-start">
            <Sidebar />
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
const Navbar = () => import('@/components/Navbar.vue')
const Sidebar = () => import('@/components/Sidebar.vue')
export default {
    name: 'Layout',
    components: { Navbar, Sidebar },
}
</script>