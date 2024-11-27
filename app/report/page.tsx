import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import ReportClient from "./ReportClient";
import { GetServerSideProps } from "next";


export default async function ReportPage () {
    const currentUser = await getCurrentUser();
    
    return (
        <ClientOnly>
            <ReportClient currentUser={currentUser}/>
        </ClientOnly>
    );
}
