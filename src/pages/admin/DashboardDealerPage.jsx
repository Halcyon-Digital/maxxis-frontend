import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getDealer } from "../../api/fetchData";
import Dealer from "../../components/Dealer";
import Loading from "../../components/Loading";
import AdminLayout from "../../shared/AdminLayout";

export default function DashboardDealerPage() {
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading } = useQuery("dealer", () => getDealer(user.token));

  return (
    <AdminLayout>
      <div>{isLoading ? <Loading /> : <Dealer data={data} />}</div>
    </AdminLayout>
  );
}
