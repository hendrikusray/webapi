import App from './components/App'

import Login from './components/Login'
import Index from './components/Index'

///// component input /////
///owner///
import formData from './components/FormData/formData'
import inputsupplier from './components/FormData/inputsupplier'
import inputpegawai from './components/FormData/inputpegawai'
import inputsparepart from './components/FormData/inputsparepart'
import inputjasaservice from './components/FormData/inputjasaservice'
import inputcabang from './components/FormData/inputcabang'
import inputtipemotor from './components/FormData/inputtipemotor'
import inputmotorpelanggan from './components/FormData/inputmotorpelanggan'
import inputpemesanansparepart from './components/FormData/inputpemesanansparepart'

///cs///
import inputpelanggan from './components/FormData/inputpelanggan'
import tambahtransaksipenjualan from './components/FormData/tambahtransaksipenjualan'
import tambahjasa from './components/FormData/tambahjasa'
import inputtransaksisparepart from './components/FormData/inputtransaksisparepart'
///////component owner////////
import Owner from './components/Owner/Owner'
import OwnerDataSupplier from './components/Owner/OwnerDataSupplier'
import OwnerDataSparepart from './components/Owner/OwnerDataSparepart'
import OwnerDataPegawai from './components/Owner/OwnerDataPegawai'
import OwnerDataJasaService from './components/Owner/OwnerDataJasaService'
import OwnerDataCabang from './components/Owner/OwnerDataCabang'
import OwnerDataTipeMotor from './components/Owner/OwnerDataTipeMotor'
import OwnerDataTransaksi from './components/CS/OwnerDataTransaksi'
import OwnerDataPemesananSparepart from './components/CS/OwnerDataPemesananSparepart'
import OwnerLaporanPerbulan from './components/Owner/OwnerLaporanPerbulan'
import OwnerLaporanPertahun from './components/Owner/OwnerLaporanPertahun'
import OwnerPengeluaranBulanan from './components/Owner/OwnerPengeluaranBulanan'
/////////component edit////////
///owner////
import editpegawai from './components/FormData/editpegawai'
import editsupplier from './components/FormData/editsupplier'
import editsparepart from './components/FormData/editsparepart'
import editjasaservice from './components/FormData/editjasaservice'
import editcabang from './components/FormData/editcabang'
import edittipemotor from './components/FormData/edittipemotor'
import editmotorpelanggan from './components/FormData/editmotorpelanggan'
import editpemesanansparepart from './components/FormData/editpemesanansparepart'
import edittransaksijasa from './components/FormData/edittransaksijasa'
import edittransaksisparepart from './components/FormData/edittransaksisparepart'
////cs////
import editpelanggan from './components/FormData/editpelanggan'
/////////component CS////////
import CS from './components/CS/CS'
import pelangganCS from './components/CS/pelangganCS'
import pelangganmotorCS from './components/CS/pelangganmotorCS'
import detailmotor from './components/FormData/detailmotor'
import transaksijasaCS from './components/CS/transaksijasaCS'
import transaksisparepartCS from './components/CS/transaksisparepartCS'
import transaksijasadansparepartCS from './components/CS/transaksijasadansparepartCS'
//////////////////////////////
import Laporan from './components/Laporan/Laporan'
import LaporanPerBulan from './components/Laporan/LaporanPerBulan'
import LaporanPerTahun from './components/Laporan/LaporanPerTahun'
import LaporanPenjualanJasa from './components/Laporan/LaporanPenjualanJasa'
import LaporanSisaStock from './components/Laporan/LaporanSisaStock'
import LaporanSparepartTerlaris from './components/Laporan/LaporanSparepartTerlaris'
import LaporanPengeluaranBulanan from './components/Laporan/LaporanPengeluaranBulanan'


import ProdukIndex from './components/ProdukIndex'
import CariRiwayat from './components/CariRiwayat'



export const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,

    },
    {
        path: '/produkindex',
        name: 'produkindex',
        component: ProdukIndex,

    },
    {
        path: '/login',
        name: 'login',
        component: Login,

    },
    {
        path: '/caririwayat',
        name: 'caririwayat',
        component: CariRiwayat,

    },


    // //CS AREA

    {
        path: '/CS',
        name: 'CS',
        component: CS,
        meta: {
            auth: true
        },
        children: [
            {
                path: '/pelangganCS',
                name: 'pelangganCS',
                component: pelangganCS,
            },
            {
                path: '/pelangganmotorCS',
                name: 'pelangganmotorCS',
                component: pelangganmotorCS,
            },
            {
                path: '/transaksijasaCS',
                name: 'transaksijasaCS',
                component: transaksijasaCS,
            },
            {
                path: '/transaksisparepartCS',
                name: 'transaksisparepartCS',
                component: transaksisparepartCS,
            },
            {
                path: '/transaksijasadansparepartCS',
                name: 'transaksijasadansparepartCS',
                component: transaksijasadansparepartCS,
            },,{
                path: '/ownerdatapemesanansparepart',
                name: 'ownerdatapemesanansparepart',
                component: OwnerDataPemesananSparepart,
            },{
                path: '/ownerdatatransaksi',
                name: 'ownerdatatransaksi',
                component: OwnerDataTransaksi,
            }


        ]
    },
    {
        path: '/laporan',
        name: 'Laporan',
        component: Laporan,
        meta: {
            auth: true
        },
        children: [
            {
                path: '/laporanperbulanan',
                name: 'laporanperbulanan',
                component: LaporanPerBulan,
            }, {
                path: '/laporanpertahun',
                name: 'laporanpertahun',
                component: LaporanPerTahun,
            },{
                path: '/laporanpengeluaranbulanan',
                name: 'laporanpengeluaranbulanan',
                component: LaporanPengeluaranBulanan,
            },{
                path: '/laporanpenjualanjasa',
                name: 'laporanpenjualanjasa',
                component: LaporanPenjualanJasa,
            },{
                path: '/laporansisastock',
                name: 'laporansisastock',
                component: LaporanSisaStock,
            },{
                path: '/laporansparepartterlaris',
                name: 'laporansparepartterlaris',
                component: LaporanSparepartTerlaris,
            },
            
            
            
        ]
    },


    //form input dan edit AREA

    {
        path: '/formdata',
        name: 'formData',
        component: formData,
        meta: {
            auth: true
        },
        children: [
            {
                path: '/inputsupplier',
                name: 'inputsupplier',
                component: inputsupplier,
            },
            {
                path: '/editsupplier/:ID_SUPPLIER/:NAMA_SUPPLIER/:ALAMAT_SUPPLIER/:TELEPON_SUPPLIER/:NAMA_SALES/:TELEPON_SALES',
                name: 'editsupplier',
                component: editsupplier,
            },
            {
                path: '/inputpegawai',
                name: 'inputpegawai',
                component: inputpegawai,
            },
            {
                path: '/editpegawai/:ID_PEGAWAI/:ID_CABANG/:NAMA_PEGAWAI/:ALAMAT_PEGAWAI/:TELEPON_PEGAWAI/:GAJI_PEGAWAI',
                name: 'editpegawai',
                component: editpegawai,
            },
            {
                path: '/inputsparepart',
                name: 'inputsparepart',
                component: inputsparepart,
            },
            {
                path: '/editsparepart/:ID_SPAREPARTS/:KODE_PENEMPATAN/:NAMA_SPAREPART/:HARGA_BELI/:HARGA_JUAL/:STOK_MINIMAL/:STOK_BARANG/:GAMBAR/:TIPE',
                name: 'editsparepart',
                component: editsparepart,
            },
            {
                path: '/inputjasaservice',
                name: 'inputjasaservice',
                component: inputjasaservice,
            },
            {
                path: '/editjasaservice/:ID_JASA/:NAMA_JASA/:HARGA_JASA/',
                name: 'editjasaservice',
                component: editjasaservice,
            },
            {
                path: '/inputcabang',
                name: 'inputcabang',
                component: inputcabang,
            },
            {
                path: '/editcabang/:ID_CABANG/:NAMA_CABANG/:ALAMAT_CABANG/:TELEPON_CABANG/',
                name: 'editcabang',
                component: editcabang,
            },
            {
                path: '/inputtipemotor',
                name: 'inputtipemotor',
                component: inputtipemotor,
            },
            {
                path: '/edittipemotor/:ID_MOTOR/:MERK_MOTOR/:TIPE_MOTOR/',
                name: 'edittipemotor',
                component: edittipemotor,
            },
            , {
                path: '/inputpelanggan',
                name: 'inputpelanggan',
                component: inputpelanggan,
            }, {
                path: '/editpelanggan/:ID_PELANGGAN/:NAMA_PELANGGAN/:ALAMAT_PELANGGAN/:TELEPON_PELANGGAN/',
                name: 'editpelanggan',
                component: editpelanggan,
            },
            {
                path: '/detailmotor/:ID_PELANGGAN/:NAMA_PELANGGAN/:ALAMAT_PELANGGAN/:TELEPON_PELANGGAN/',
                name: 'detailmotor',
                component: detailmotor,
            }, 
            {
                path: '/inputmotorpelanggan',
                name: 'inputmotorpelanggan',
                component: inputmotorpelanggan,
            },{
                path: '/editmotorpelangggan/:ID_KENDARAAN_PEL/:ID_MOTOR/:ID_PELANGGAN/:NO_PLAT/',
                name: 'editmotorpelanggan',
                component: editmotorpelanggan,
            },{
                path: '/tambahtransaksipenjualan',
                name: 'tambahtransaksipenjualan',
                component: tambahtransaksipenjualan,
            },{
                path: '/tambahjasa',
                name: 'tambahjasa',
                component: tambahjasa,
            },{
                path: '/inputpemesanansparepart',
                name: 'inputpemesanansparepart',
                component: inputpemesanansparepart,
            },{
                path: '/editpemesanansparepart/:ID_PEMESANAN/:ID_SUPPLIER/:TGL_PEMESANAN/:GRANDTOTAL_PEMESANAN/:STATUS_PEMESANAN/',
                name: 'editpemesanansparepart',
                component: editpemesanansparepart,
            },{
                path: '/edittransaksijasa/:ID_DETAIL_PENJUALAN_JASA/:ID_TRANSAKSI/:ID_JASA/:ID_MONTIR_ONDUTY/:SUBTOTAL_JASA/:STATUS_JASA/',
                name: 'edittransaksijasa',
                component: edittransaksijasa,
            },{
                path: '/edittransaksisparepart/:ID_PENJUALAN_SPAREPART/:ID_TRANSAKSI/:ID_SPAREPARTS/:JUMLAH_SPAREPART/:SUBTOTAL_SPAREPART/:HARGA_TAMPUNG_JUAL',
                name: 'edittransaksisparepart',
                component: edittransaksisparepart,
            },{
                path: '/inputtransaksisparepart',
                name: 'inputtransaksisparepart',
                component: inputtransaksisparepart,
            },
          
          



        ]
    },

    //Owner Area
    {
        path: '/owner',
        name: 'owner',
        component: Owner,
        meta: {
            auth: true
        },
        children: [
            {
                path: '/ownerdatapegawai',
                name: 'ownerdatapegawai',
                component: OwnerDataPegawai,
            },
            {
                path: '/ownerdatasupplier',
                name: 'ownerdatasupplier',
                component: OwnerDataSupplier,
            },
            {
                path: '/ownerdatasparepart',
                name: 'ownerdatasparepart',
                component: OwnerDataSparepart,
            },
            {
                path: '/ownerdatajasaservice',
                name: 'ownerdatajasaservice',
                component: OwnerDataJasaService,
            }, {
                path: '/ownerdatacabang',
                name: 'ownerdatacabang',
                component: OwnerDataCabang,
            },
            {
                path: '/ownerdatatipemotor',
                name: 'ownerdatatipemotor',
                component: OwnerDataTipeMotor,
            },{
                path: '/ownerlaporanperbulan',
                name: 'ownerlaoranperbulan',
                component: OwnerLaporanPerbulan,
            },{
                path: '/ownerlaporanpertahun',
                name: 'ownerlaporanpertahun',
                component: OwnerLaporanPertahun,
            },{
                path: '/ownerpengeluaranbulanan',
                name: 'ownerpengeluaranbulanan',
                component: OwnerPengeluaranBulanan,
            },
         
        ]
    },



];