import React, { useState, useEffect, Fragment } from "react";
import { connect } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import NavigationUser from "../../component/NavigationUser/navigationUser";
import './management-page.css';
import {
    addDataToAPI, getDataToAPI, getDataUser, updateDataAPI,
    manipulateData,
    deleteDataApi,
    resetDataManager
} from "../../config/redux/action";
import { HashLink } from "react-router-hash-link";

function ManagementPage({ addDataToAPI, user, getManagement, mymanagement, getDataUser,
    updateDataAPI,
    manipulateData,
    deleteDataApi,
    resetDataManager }) {

    const [jumlah, setJumlah] = useState('')
    const [tanggal, setTanggal] = useState("")
    const [kategori, setKategori] = useState("pemasukan")
    const [keterangan, setKeterangan] = useState("")
    const [textButton, setTextbutton] = useState("Simpan")
    const [styleSimpanUpdate, setStyleSimpanUpdate] = useState("btn-save")
    const [styleCancel, setStyleCancel] = useState("btn-cancel")
    const [managementID, setManagementID] = useState("")
    const [manageUpdate, setManageUpdate] = useState("")
    const [chackedPemasukan, setChackedPemasukan] = useState(true)
    const [chackedPengeluaran, setChackedPengeluaran] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('title') || '';
    const handleSearch = event => {
        const title = event.target.value
        if (title) {
            setSearchParams({ title });
        } else {
            setSearchParams({});
        }
    };
    const tanggalChange = (event) => {
        setTanggal(event.target.value)
        // console.log(tanggal)
    }
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'))
        getManagement(userData.uid);
        getDataUser(userData.uid)
    }, [getManagement]);

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
    const updateManagement = (management) => {
        console.log(management)
        setJumlah(management.data.jumlah)
        setKategori(management.data.kategori)
        setKeterangan(management.data.keterangan)
        setTanggal(management.data.tanggal)
        setTextbutton("Update")
        setStyleSimpanUpdate("btn-update")
        setStyleCancel("btn-cancel-update")
        setManagementID(management.id)
        if (management.data.kategori === "pemasukan") {
            setChackedPengeluaran(false)
            setChackedPemasukan(true)
        } else if (management.data.kategori === "pengeluaran") {
            setChackedPemasukan(false)
            setChackedPengeluaran(true)
        }
        const dataBefore = {
            kategori: management.data.kategori,
            jumlah: management.data.jumlah
        }
        setManageUpdate(dataBefore)
        console.log(management)
    }
    const cancelUpdate = () => {
        setJumlah('')
        setKeterangan('')
        setTanggal('')
        setTextbutton("Simpan")
        setStyleSimpanUpdate("btn-save")
        setStyleCancel("btn-cancel")
    }
    const deleteManagement = ({ e, management }) => {
        e.stopPropagation();
        const userData = JSON.parse(localStorage.getItem('user'))
        const data = {
            userId: userData.uid,
            manageID: management.id,
            kategori: management.data.kategori,
            jumlah: management.data.jumlah,
            pemasukan: user.keuangan.pemasukan,
            pengeluaran: user.keuangan.pengeluaran,
            saldo: user.keuangan.saldo
        }
        deleteDataApi(data)
        window.location.reload(false);
    }
    const readManagement = (item) => {
        if (item.length > 0 || item !== null) {
            return (
                <Fragment>
                    {
                        item
                            .filter(management => management.data.keterangan.toLowerCase().includes(searchTerm.toLowerCase()))
                            .map(management => {
                                return (
                                    <div className="item-data" key={management.id}>
                                        <div>
                                            <h2>{management.data.jumlah}</h2>
                                            <p>Tipe {management.data.kategori}</p>
                                        </div>
                                        <p>Tanggal {management.data.tanggal}</p>
                                        <p>Keterangan {management.data.keterangan}</p>
                                        <HashLink to="#keuangan" smooth>
                                            <button className="edit" onClick={() => { updateManagement(management) }}>Edit</button>
                                        </HashLink>
                                        <button className="btn-delete" onClick={(e) => deleteManagement({ e, management })}>Delete</button>
                                    </div>
                                )
                            })
                    }
                </Fragment>
            )
        } else {
            return null
        }
    }
    // const handleKosong = ({ data }) => {
    //     if (jumlah.length === 0 && tanggal.length === 0) {
    //         return alert("data tanggal atau jumlah uang tidak boleh kosong")
    //     }
    //     else {
    //         aksi(data)
    //     }
    // }
    const handleSaveAPI = () => {
        const userData = JSON.parse(localStorage.getItem('user'))
        const data = {
            jumlah: Number(jumlah),
            tanggal,
            kategori,
            keterangan,
            userId: userData.uid
        }
        setJumlah('')
        setKeterangan('')
        setTanggal('')
        if (textButton === "Simpan") {
            if (jumlah.length === 0 && tanggal.length === 0) {
                return alert("data tanggal atau jumlah uang tidak boleh kosong")
            }
            else {
                addDataToAPI(data)
            }
            let userId = data.userId
            manipulateData({ data, user, manageUpdate })
        } else {
            data.manageID = managementID
            setManageUpdate()
            if (jumlah.length === 0 && tanggal.length === 0) {
                return alert("data tanggal atau jumlah uang tidak boleh kosong")
            }
            else {
                console.log(data)
                console.log(manageUpdate)
                updateDataAPI({ data, user, manageUpdate })
                setTextbutton("Simpan")
                setStyleSimpanUpdate("btn-save")
                setStyleCancel("btn-cancel")
            }
        }
        // alert('berhasil')
    }
    const readDataSaldo = (item) => {
        if (item != null) {
            return (
                <Fragment>
                    <div className="keuangan">
                        <div>
                            <p>
                                Saldo
                            </p>
                            <h3>
                                Rp <font color="green">{user.keuangan.saldo},-</font>
                            </h3>
                        </div>
                        <div>
                            <p>
                                Pemasukan
                            </p>
                            <h3>
                                Rp <font color="blue">{user.keuangan.pemasukan},-</font>
                            </h3>
                        </div>
                        <div>
                            <p>
                                Pengeluaran
                            </p>
                            <h3>
                                Rp <font color="red">{user.keuangan.pengeluaran},-</font>
                            </h3>
                        </div>
                    </div>
                </Fragment>
            )
        } else {
            return (
                <h3>
                    Harap Tunggu Data Sedang di proses...
                </h3>
            )
        }
    }
    function radioPemasukan() {
        setChackedPemasukan(true)
        setChackedPengeluaran(false)
    }
    function radioPengeluaran() {
        setChackedPemasukan(false)
        setChackedPengeluaran(true)
    }
    function resetData() {
        const resetUserData = JSON.parse(localStorage.getItem('user'))
        const data = {
            userId: resetUserData.uid
        }
        resetDataManager(data)
        window.location.reload(false);
    }
    return (
        <Fragment>
            <NavigationUser />
            <div id="keuangan" ></div>
            <div className="management-container">
                <div className="input-container">
                    <h2 >
                        Management Keuangan
                    </h2>
                    <input className="input-state" type="date" value={tanggal} onChange={tanggalChange} placeholder=" Masukkan Tanggal" required />
                    <input className="input-state" type="number" value={jumlah} onChange={jumlahChange} placeholder=" Masukkan Jumlah Uang" required />
                    <input className="input-state" type="text" value={keterangan} onChange={keteranganChange} placeholder=" Masukkan Keterangan" />
                    <div className="grup-radio">
                        <input type="radio" name="kategori" value="pemasukan" onClick={radioPemasukan} onChange={kategoriChange} checked={chackedPemasukan} />
                        <label>Pemasukan</label>
                        <input type="radio" name="kategori" value="pengeluaran" onClick={radioPengeluaran} onChange={kategoriChange} checked={chackedPengeluaran} />
                        <label>Pengeluaran</label>
                    </div>
                    <button onClick={handleSaveAPI} className={styleSimpanUpdate}>{textButton}</button>
                    <button onClick={cancelUpdate} className={styleCancel}>Cancel</button>
                </div>
                {
                    readDataSaldo(user)
                }
                <div className="search-container">
                    <p>Cari Berdasarkan Keterangan</p>
                    <input className="search-item" type="text" placeholder="Search..." value={searchTerm}
                        onChange={handleSearch} />
                </div>
                <button className="btn-reset" onClick={() => resetData()}>
                    Reset Data
                </button>
                {
                    readManagement(mymanagement)
                }
            </div>
        </Fragment >
    )
}

const reduxState = (state) => ({
    user: state.user,
    isLogin: state.isLogin,
    mymanagement: state.management
})

const reduxDispatch = (dispatch) => ({
    addDataToAPI: (data) => dispatch(addDataToAPI(data)),
    getManagement: (data) => dispatch(getDataToAPI(data)),
    getDataUser: (data) => dispatch(getDataUser(data)),
    updateDataAPI: (data) => dispatch(updateDataAPI(data)),
    manipulateData: (data) => dispatch(manipulateData(data)),
    deleteDataApi: (data) => dispatch(deleteDataApi(data)),
    resetDataManager: (data) => dispatch(resetDataManager(data))
})

export default connect(reduxState, reduxDispatch)(ManagementPage);