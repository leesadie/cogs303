import ClientOnly from "../components/ClientOnly";
import ReportClient from "./ReportClient";

const ReportPage = () => {
    return (
        <ClientOnly>
            <ReportClient />
        </ClientOnly>
    );
}

export default ReportPage;