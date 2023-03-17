declare interface Transaction {
  transaction_id: string;
  transaction_date: string;
  transaction_type: "withdraw" | "deposit",
  amount: number;
  balance: number;
  account_id: string; 
}

type Transactions = Transaction[];