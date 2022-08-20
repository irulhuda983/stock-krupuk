<template>
    <div class="flex-auto w-full h-full box-border p-6 overflow-hidden flex relative space-x-3">
        <div class="h-full w-full bg-white rounded-2xl filter drop-shadow-base">
            <div class="h-1/7 ml-4 flex text-sm text-gray-800 items-center 2xl:text-md">
                <span class="font-bold">Statistik Produksi Barang</span>
                <!-- &nbsp;<span>(01-31 Januari 2022)</span> -->
            </div>
            <div class="h-6/7 w-full pl-3 pr-6 pb-2 box-border overflow-hidden">
                <!-- Chart Here-->
                <apexchart
                    class="font-medium"
                    width="100%"
                    height="350"
                    type="area"
                    :options="options"
                    :series="series"
                ></apexchart>
            </div>
        </div>

        <!-- <div class="h-full w-1/4 bg-white rounded-2xl filter drop-shadow-base">
            <div>

            </div>
        </div> -->
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
    components: {
        apexchart: VueApexCharts,
    },

    data(){
        return {
            tanggal: null,
            options: {
                tooltip: {
                    enabled: true,
                },
                dataLabels: {
                    enabled: false,
                },
                // fill: {
                //     colors: ['#E5D0FF', '#F8F2FF']
                // },
                // theme: {
                //     mode: 'light', 
                //     palette: 'palette1', 
                //     monochrome: {
                //         enabled: true,
                //         color: '#8722D7',
                //         shadeTo: 'dark',
                //         shadeIntensity: 0.65
                //     },
                // },
                grid: { show: false },
                chart: {
                    id: "chartstok",
                    toolbar: { show: false },
                    zoom: {
                        enabled: false,
                    },
                    fontFamily: 'Poppins, sans-serif',
                },
                yaxis: {
                    axisBorder: {
                        show: true,
                        color: "#78909C",
                        offsetX: 0,
                        offsetY: 0,
                    },
                },
                xaxis: {
                    axisBorder: {
                        show: true,
                        color: "#78909C",
                        height: 1,
                        width: "100%",
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: { show: false },
                    categories: [],
                },
            },
            series: [{
              name: 'permintaan',
              data: []
            },{
              name: 'penjualan',
              data: []
            },{
              name: 'persediaan',
              data: []
            },{
                name: 'produksi',
                data: []
            },]
        }
          
    },

    mounted(){
        this.getGrafik()
    },

    methods: {
        async getGrafik(){
            try {
                let { data } = await axios.get('dashboard/grafik')

                this.options = {
                    tooltip: {
                        enabled: true,
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    // fill: {
                    //     colors: ['#E5D0FF', '#F8F2FF']
                    // },
                    // theme: {
                    //     mode: 'light', 
                    //     palette: 'palette1', 
                    //     monochrome: {
                    //         enabled: true,
                    //         color: '#8722D7',
                    //         shadeTo: 'dark',
                    //         shadeIntensity: 0.65
                    //     },
                    // },
                    grid: { show: false },
                    chart: {
                        id: "chartstok",
                        toolbar: { show: false },
                        zoom: {
                            enabled: false,
                        },
                        fontFamily: 'Poppins, sans-serif',
                    },
                    yaxis: {
                        axisBorder: {
                            show: true,
                            color: "#78909C",
                            offsetX: 0,
                            offsetY: 0,
                        },
                    },
                    xaxis: {
                        axisBorder: {
                            show: true,
                            color: "#78909C",
                            height: 1,
                            width: "100%",
                            offsetX: 0,
                            offsetY: 0,
                        },
                        axisTicks: { show: false },
                        categories: data.label,
                    },
                }

                this.series = [{
                    name: 'permintaan',
                    data: data.permintaan
                },{
                    name: 'penjualan',
                    data: data.penjualan
                },{
                    name: 'persediaan',
                    data: data.persediaan
                },{
                    name: 'produksi',
                    data: data.produksi
                }]
                
            }catch(e){
                console.log(e)
            }
        }
    }
}
</script>