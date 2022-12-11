import React from "react";
import { connect } from 'react-redux';
import NavigationUser from "../../component/NavigationUser/navigationUser";
import './tutorial.css'

function Tutorial() {
    return (
        <div>
            <NavigationUser />
            <div className="tutorial-container">
                <div className="card-tutorial">
                    <h2>
                       Tutorial Management Keuangan
                    </h2>
                    <ul>
                        <li>
                            Silahkan buka menu keuangan pada navigasi di atas
                        </li>
                        <li>
                            Masukkan tanggal, Jumlah keuangan, keterangan, serta ketegori pengeluaran atau pemasukan
                        </li>
                        <li>
                            Klik simpan untuk menambah data
                        </li>
                        <li>
                            Anda bisa melihat saldo anda, jumlah total pengeluaran, serta jumlah total pemasukan
                        </li>
                        <li>
                            Jika ingin mengubah data maka silahkan klik tombol update pada data yang ingin diubah
                        </li>
                        <li>
                            Silahkan isi form perubahan pada menu form
                        </li>
                        <li>
                            Klik cancel jika ingin membatalkan perubahan dan klik update jika ingin mengubah data
                        </li>
                        <li>
                            Jika ingin menghapus data pemasukan atau pengeluaran maka silahkan klik hapus pada tombol data yang ingin dihapus
                        </li>
                        <li>
                            Jika ingin menghapus seluruh data maka silahkan klik tombol reset
                        </li>
                        <li>
                            Anda juga bisa mencari data berdasarkan pencarian di tombol search data
                        </li>
                        <li>
                            Jika ingin logout maka bisa klik logo yang berada di navigasi di atas maka akan diarahkan ke halaman user
                        </li>
                        <li>
                            Setelahnya silahkan klik tombol keluar
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const reduxState = (state) => ({
    user: state.user,
    isLogin: state.isLogin
})

export default connect(reduxState, null)(Tutorial);