import React, { useState } from "react";
import { connect } from 'react-redux';
import NavigationUser from "../../component/NavigationUser/navigationUser";
import './management-page.css';
import { addDataToAPI } from "../../config/redux/action";

function ManagementPage({addDataToAPI, user}) {
    const [jumlah, setJumlah] = useState("")
    const [tanggal, setTanggal] = useState("")
    const [kategori, setKategori] = useState("")
    const [keterangan, setKeterangan] = useState("")
    const tanggalChange = (event) => {
        setTanggal(event.target.value)
        // console.log(tanggal)
    }
    const kategoriChange = (event) => {
        setKategori(event.target.value)
        // console.log(kategori)
    }
    const keteranganChange = (event) => {
        setKeterangan(event.target.value)
        // console.log(keterangan)
    }
    const jumlahChange = (event) => {
        setJumlah(event.target.value)
        // console.log(jumlah)
    }
    const handleSaveAPI = () => {
        const data = {
            jumlah,
            tanggal,
            kategori,
            keterangan,
            userId: user.uid
        }
        console.log(user)
        console.log(data)
        addDataToAPI(data)
        // alert('berhasil')
    }
    return (
        <div>
            <NavigationUser />
            <div className="management-container">
                <h2>
                    Management Page
                </h2>
                <div className="input-container">
                    <input type="text" value={tanggal} onChange={tanggalChange}/>
                    <input type="radio" name="kategori" value="pemasukan" onChange={kategoriChange}/>
                    <label>Pemasukan</label>
                    <input type="radio" name="kategori" value="pengeluaran" onChange={kategoriChange}/>
                    <label>Pengeluaran</label>
                    <input type="number" value={jumlah} onChange={jumlahChange}/>
                    <input type="text" value={keterangan} onChange={keteranganChange}/>
                    <button onClick={handleSaveAPI}>Simpan</button>
                </div>
                <div className="item-data">
                    <h2>Jumlah</h2>
                    <p>Tanggal</p>
                    <p>Kategori</p>
                    <p>Keterangan</p>
                </div>
            </div>
        </div>
    )
}

const reduxState = (state) => ({
    user: state.user,
    isLogin: state.isLogin
})

const reduxDispatch = (dispatch) => ({
    addDataToAPI: (data) => dispatch(addDataToAPI(data))
})

export default connect(reduxState, reduxDispatch)(ManagementPage);