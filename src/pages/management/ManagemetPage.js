import React from "react";
import { Balance } from '../../component/finance/Balance';
import { IncomeExpenses } from '../../component/finance/IncomeExpenses';
import { TransactionList } from '../../component/finance/TransactionList';
import { AddTransaction } from '../../component/finance/AddTransaction';
import { GlobalProvider } from '../../config/GlobalState';
import './management-page.css';
import NavigationUser from "../../component/NavigationUser/navigationUser";

function ManagementPage() {
    return (
        <GlobalProvider>
            <NavigationUser />
            <div className="finance-container" id="finance">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
}


export default ManagementPage;