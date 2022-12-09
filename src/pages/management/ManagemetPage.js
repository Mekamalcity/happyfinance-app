import React, { useState } from "react";
import { connect } from 'react-redux';
import NavigationUser from "../../component/NavigationUser/navigationUser";
import './management-page.css';
import { addDataToAPI } from "../../config/redux/action/action";

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

                    <footer class="bd-footer py-4 py-md-5 mt-5 bg-light">
                        <div class="footer-container mx-5 py-4 py-md-5 px-4 px-md-3">
                            <div class="row">
                            <div class="col-lg-3 mb-3">
                                <a class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="#" aria-label="HappyFinance">
                                <img src='' width="40" height="32" class="d-block me-2" viewBox="0 0 118 94" alt="" />
                                </a>
                                <ul class="list-unstyled small text-muted">
                                <li class="mb-2">Designed and built by the Team Capstone Project C22-246</li>
                                </ul>
                            </div>
                            <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                                <h5>Navigation</h5>
                                <ul class="list-unstyled">
                                <li class="mb-2"><a href="#">Home</a></li>
                                <li class="mb-2"><a href="#">About us</a></li>
                                <li class="mb-2"><a href="#">Profile</a></li>
                                </ul>
                            </div>
                            <div class="col-6 col-lg-2 mb-3">
                                <h5>Team</h5>
                                <ul class="list-unstyled">
                                <li class="mb-2"><a href="#">Farid Akmal</a></li>
                                <li class="mb-2"><a href="https://www.linkedin.com/in/sakadzun">Saka Dzun</a></li>
                                </ul>
                            </div>
                            <div class="col-6 col-lg-2 mb-3">
                                <h5>Address</h5>
                                <ul class="list-unstyled small text-muted">
                                <li class="mb-2">Jl. Batik Kumeli No.50, Sukaluyu,Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40123</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </footer>
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