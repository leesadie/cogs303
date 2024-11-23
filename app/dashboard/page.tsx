import ClientOnly from "../components/ClientOnly";
import DashboardClient from "./DashboardClient";

const DashboardPage = () => {
    return (
        <ClientOnly>
            <DashboardClient />
        </ClientOnly>
    );
}

export default DashboardPage;