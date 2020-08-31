import Http from './http'
// import store from './store'
// import Cookie from 'js-cookie'
// import Session from 'vue-session'

export default {
    authenticate(USERNAME, PASSWORD) {
        return new Promise((resolve, reject) => {
            const payload = {
                USERNAME,
                PASSWORD
            }

            const successCallback = (res) => {
                const user = res.data
                resolve()
            }

            const errorCallback = (err) => {
                reject(err)
            }


            Http.post('/login', payload, successCallback, errorCallback)
        })
    },

    //////////////////////////////SUPPLIER/////////////////////////
    getallsupplier() {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.get('/supplier', successCallback, errorCallback)
        })
    },
    deletesupplier(id) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.delete(`/supplier/${id}`, successCallback, errorCallback)
        })
    },

    inputsupplier(inputsupplier) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.post('/inputsupplier', inputsupplier, successCallback, errorCallback)
        })
    },

    editsupplier(ID_SUPPLIER, NAMA_SUPPLIER, ALAMAT_SUPPLIER, TELEPON_SUPPLIER, NAMA_SALES, TELEPON_SALES) {
        return new Promise((resolve, reject) => {
            const payload = {
                ID_SUPPLIER,
                NAMA_SUPPLIER,
                ALAMAT_SUPPLIER,
                TELEPON_SUPPLIER,
                NAMA_SALES,
                TELEPON_SALES
            }

            const successCallback = (res) => {
                const user = res.data
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.patch(`/supplier/${ID_SUPPLIER}`, payload, successCallback, errorCallback)
        })
    },

    ///////////////////////////////SPAREPART///////////////////////////////

    getallsparepart() {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.get('/sparepart', successCallback, errorCallback)
        })
    },
    deletesparepart(id) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.delete(`/sparepart/${id}`, successCallback, errorCallback)
        })
    },
    inputsparepart(inputsparepart) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.post('/inputsparepart', inputsparepart, successCallback, errorCallback)
        })
    },

    updateGambar(ID_SPAREPARTS, KODE_PENEMPATAN, NAMA_SPAREPART, HARGA_BELI, HARGA_JUAL, STOK_MINIMAL, STOK_BARANG,GAMBAR,TIPE ) {
        return new Promise((resolve, reject) => {
            const payload = {
                ID_SPAREPARTS,
                KODE_PENEMPATAN,
                NAMA_SPAREPART,
                HARGA_BELI,
                HARGA_JUAL,
                STOK_MINIMAL,
                STOK_BARANG,
                GAMBAR,
                TIPE,
            }

            const successCallback = (res) => {
                const user = res.data
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.post(`/updateGambar/${ID_SPAREPARTS}`, payload, successCallback, errorCallback)
        })

    },
    updateGambar2(ID_SPAREPARTS, GAMBAR) {
        return new Promise((resolve, reject) => {
            const payload = {
                GAMBAR
             
            }

            const successCallback = (res) => {
                const user = res.data
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.post(`/updateGambar2/${ID_SPAREPARTS}`, payload, successCallback, errorCallback)
        })

    },

    getposisisparepart() {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.get('/posisi', successCallback, errorCallback)
        })
    },

    ///////////////////////////////PEGAWAI////////////////////////////////
    getallpegawai() {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.get('/pegawai', successCallback, errorCallback)
        })
    },
    deletepegawai(id) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.delete(`/pegawai/${id}`, successCallback, errorCallback)
        })
    },
    inputpegawai(inputpegawai) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.post('/inputpegawai', inputpegawai, successCallback, errorCallback)
        })
    },

    editpegawai(ID_PEGAWAI,ID_CABANG, NAMA_PEGAWAI, ALAMAT_PEGAWAI, TELEPON_PEGAWAI,GAJI_PEGAWAI) {
        return new Promise((resolve, reject) => {
            const payload = {
                ID_PEGAWAI,
                ID_CABANG,
                NAMA_PEGAWAI,
                ALAMAT_PEGAWAI,
                TELEPON_PEGAWAI,
                GAJI_PEGAWAI
    
            }

            const successCallback = (res) => {
                const user = res.data
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.patch(`/pegawai/${ID_PEGAWAI}`, payload, successCallback, errorCallback)
        })
    },
    ////////////////JASA SERVICE ///////////////////////////////////////

    inputjasaservice(inputjasaservice) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.post('/jasa_service', inputjasaservice, successCallback, errorCallback)
        })
    },
    getalljasa() {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.get('/jasa_service', successCallback, errorCallback)
        })
    },
    deletejasa(id) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.delete(`/jasa_service/${id}`, successCallback, errorCallback)
        })
    },

    editjasaservice(ID_JASA, NAMA_JASA, HARGA_JASA) {
        return new Promise((resolve, reject) => {
            const payload = {
                NAMA_JASA,
                HARGA_JASA

            }

            const successCallback = (res) => {
                const user = res.data
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.patch(`/jasa_service/${ID_JASA}`, payload, successCallback, errorCallback)
        })
    },



    //////////////DATA CABANG//////////////////////////////////
    inputcabang(inputcabang) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.post('/branches', inputcabang, successCallback, errorCallback)
        })
    },

    getallcabang() {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.get('/branches', successCallback, errorCallback)
        })
    },

    deletecabang(id) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.delete(`/branches/${id}`, successCallback, errorCallback)
        })
    },

    editcabang(ID_CABANG, NAMA_CABANG, ALAMAT_CABANG, TELEPON_CABANG) {
        return new Promise((resolve, reject) => {
            const payload = {
                NAMA_CABANG,
                ALAMAT_CABANG,
                TELEPON_CABANG

            }

            const successCallback = (res) => {
                const user = res.data
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.patch(`/branches/${ID_CABANG}`, payload, successCallback, errorCallback)
        })
    },

    //////////////////////TIPE MOTOR AREA/////////////////////////////////////////
    getallmotor() {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.get('/motor', successCallback, errorCallback)
        })
    },
    deletemotor(id) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.delete(`/motor/${id}`, successCallback, errorCallback)
        })
    },
    inputmotor(inputmotor) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.post('/motor', inputmotor, successCallback, errorCallback)
        })
    },
    editmotor(ID_MOTOR, MERK_MOTOR, TIPE_MOTOR) {
        return new Promise((resolve, reject) => {
            const payload = {
                MERK_MOTOR,
                TIPE_MOTOR,


            }

            const successCallback = (res) => {
                const user = res.data
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.patch(`/motor/${ID_MOTOR}`, payload, successCallback, errorCallback)
        })
    },


    ///////////////////////pelanggan///////////////////////////////
    getallpelanggan() {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.get('/pelanggan', successCallback, errorCallback)
        })
    }, deletepelanggan(id) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.delete(`/pelanggan/${id}`, successCallback, errorCallback)
        })
    },inputpelanggan(inputpelanggan) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.post('/pelanggan', inputpelanggan, successCallback, errorCallback)
        })
    }, editpelanggan(ID_PELANGGAN, NAMA_PELANGGAN, ALAMAT_PELANGGAN, TELEPON_PELANGGAN) {
        return new Promise((resolve, reject) => {
            const payload = {
                NAMA_PELANGGAN,
                ALAMAT_PELANGGAN,
                TELEPON_PELANGGAN

            }

            const successCallback = (res) => {
                const user = res.data
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.patch(`/pelanggan/${ID_PELANGGAN}`, payload, successCallback, errorCallback)
        })
    },

    inputmotorpelanggan(inputmotorpelanggan) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.post('/kendaraan_pelanggan', inputmotorpelanggan, successCallback, errorCallback)
        })
    },
    getallmotorpelanggan() {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.get('/kendaraan_pelanggan', successCallback, errorCallback)
        })
    },deletemotorpelanggan(id) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.delete(`/kendaraan_pelanggan/${id}`, successCallback, errorCallback)
        })
    },
    editmotorpelanggan(ID_KENDARAAN_PEL,ID_MOTOR,ID_PELANGGAN,NO_PLAT) {
        return new Promise((resolve, reject) => {
            const payload = {
              ID_MOTOR,
              ID_PELANGGAN,
              NO_PLAT

            }

            const successCallback = (res) => {
                const user = res.data
                resolve(res.data)

            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.patch(`/kendaraan_pelanggan/${ID_KENDARAAN_PEL}`, payload, successCallback, errorCallback)
        })
    },


    ////////////////////transaksi jasa////////////////////////////////
    getalltransaksijasa() {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.get('/detail_penjualan_jasa', successCallback, errorCallback)
        })
    },
    pendapatanTahunan() {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.get('/PendapatanTahunan', successCallback, errorCallback)
        })
    },
    pendapatanBulanan(tahun) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.get(`/pendapatanBulanan/${tahun}`, successCallback, errorCallback)
        })
    },
    deletetransaksijasa(id) {
        return new Promise((resolve, reject) => {

            const successCallback = (res) => {
                resolve(res.data)
            }

            const errorCallback = (err) => {
                reject(err)

            }

            Http.delete(`/detail_penjualan_jasa/${id}`, successCallback, errorCallback)
        })
    },
    edittransaksijasa(  ID_DETAIL_PENJUALAN_JASA,ID_TRANSAKSI,ID_JASA,ID_MONTIR_ONDUTY,SUBTOTAL_JASA,STATUS_JASA) {
        return new Promise((resolve, reject) => {
            const payload = {
                ID_TRANSAKSI,ID_JASA,ID_MONTIR_ONDUTY,SUBTOTAL_JASA,STATUS_JASA
    
            }
    
            const successCallback = (res) => {
                const user = res.data
                resolve(res.data)
    
            }
    
            const errorCallback = (err) => {
                reject(err)
    
            }
    
            Http.patch(`/detail_penjualan_jasa/${ID_DETAIL_PENJUALAN_JASA}`, payload, successCallback, errorCallback)
        })
    },
    


//////////////////////TRANSAKSI SPAREPARTS///////////////////////////////

inputtransaksisparepart(inputtransaksisparepart) {
    return new Promise((resolve, reject) => {

        const successCallback = (res) => {
            resolve(res.data)

        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.post('/detail_penjualan_sparepart', inputtransaksisparepart, successCallback, errorCallback)
    })
},

getalltransaksispareparts() {
    return new Promise((resolve, reject) => {

        const successCallback = (res) => {
            resolve(res.data)
        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.get('/detail_penjualan_sparepart', successCallback, errorCallback)
    })
},

editransaksisparepart( ID_PENJUALAN_SPAREPART,ID_TRANSAKSI,ID_SPAREPARTS,JUMLAH_SPAREPART,SUBTOTAL_SPAREPART,HARGA_TAMPUNG_JUAL) {
    return new Promise((resolve, reject) => {
        const payload = {
            ID_TRANSAKSI,ID_SPAREPARTS,JUMLAH_SPAREPART,SUBTOTAL_SPAREPART,HARGA_TAMPUNG_JUAL

        }

        const successCallback = (res) => {
            const user = res.data
            resolve(res.data)

        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.patch(`/detail_penjualan_sparepart/${ID_PENJUALAN_SPAREPART}`, payload, successCallback, errorCallback)
    })
},

deletetransaksispareparts(id) {
    return new Promise((resolve, reject) => {

        const successCallback = (res) => {
            resolve(res.data)
        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.delete(`/detail_penjualan_sparepart/${id}`, successCallback, errorCallback)
    })
},
/////////////////transaksi induk ////////////////////////////////////////
inputtransaksiinduk(inputtransaksiinduk) {
    return new Promise((resolve, reject) => {

        const successCallback = (res) => {
            resolve(res.data)

        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.post('/transaksi_penjualan', inputtransaksiinduk, successCallback, errorCallback)
    })
},
inputjasatemporary(inputjasatemporary) {
    return new Promise((resolve, reject) => {

        const successCallback = (res) => {
            resolve(res.data)

        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.post('/detail_penjualan_jasa', inputjasatemporary, successCallback, errorCallback)
    })
},
gettransaksipenjualan() {
    return new Promise((resolve, reject) => {

        const successCallback = (res) => {
            resolve(res.data)
        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.get('/transaksi_penjualan', successCallback, errorCallback)
    })
},
//////////////////////montir onduty//////////////////////////////
inputmontironduty(inputmontironduty) {
    return new Promise((resolve, reject) => {

        const successCallback = (res) => {
            resolve(res.data)

        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.post('/montir_onduty', inputmontironduty, successCallback, errorCallback)
    })
},

//////////////////////Detail Jasa Service//////////////////////////////
getalldetailjasa() {
    return new Promise((resolve, reject) => {

        const successCallback = (res) => {
            resolve(res.data)
        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.get('/detail_penjualan_jasa', successCallback, errorCallback)
    })
},
getallmontironduty() {
    return new Promise((resolve, reject) => {

        const successCallback = (res) => {
            resolve(res.data)
        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.get('/montir_onduty', successCallback, errorCallback)
    })
},

//////////////////////Sparepart Kurang//////////////////////////////
getallsparepartkurang() {
    return new Promise((resolve, reject) => {

        const successCallback = (res) => {
            resolve(res.data)
        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.get('/sparepart', successCallback, errorCallback)
    })
},

//////////////////////Transaksi//////////////////////////////
getalltransaksibelumlunas() {
    return new Promise((resolve, reject) => {

        const successCallback = (res) => {
            resolve(res.data)
        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.get('/transaksi_penjualan', successCallback, errorCallback)
    })
},

//////////////////////Histori//////////////////////////////
getallhistori() {
    return new Promise((resolve, reject) => {

        const successCallback = (res) => {
            resolve(res.data)
        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.get('/pemesanan_sparepart', successCallback, errorCallback)
    })
},

getallpemesanan(){
    return new Promise((resolve, reject) => {

        const successCallback = (res) => {
            resolve(res.data)
        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.get('/pemesanan_sparepart', successCallback, errorCallback)
    })
},

inputpemesanansparepart(inputpemesanansparepart) {
    return new Promise((resolve, reject) => {

        const successCallback = (res) => {
            resolve(res.data)

        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.post('/inputpemesanansparepart', inputpemesanansparepart, successCallback, errorCallback)
    })
},

editpemesanansparepart(ID_PEMESANAN,ID_SUPPLIER,TGL_PEMESANAN,GRANDTOTAL_PEMESANAN,STATUS_PEMESANAN) {
    return new Promise((resolve, reject) => {
        const payload = {
            ID_SUPPLIER,
            TGL_PEMESANAN,
            GRANDTOTAL_PEMESANAN,
            STATUS_PEMESANAN

        }

        const successCallback = (res) => {
            const user = res.data
            resolve(res.data)

        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.patch(`/pemesanan_sparepart/${ID_PEMESANAN}`, payload, successCallback, errorCallback)
    })
},

deletepemesanansparepart(id) {
    return new Promise((resolve, reject) => {

        const successCallback = (res) => {
            resolve(res.data)
        }

        const errorCallback = (err) => {
            reject(err)

        }

        Http.delete(`/pemesanan_sparepart/${id}`, successCallback, errorCallback)
    })
},

}



