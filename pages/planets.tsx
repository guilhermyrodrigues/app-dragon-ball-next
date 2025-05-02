import PlanetsTable from "@/components/PlanetsTable";
import Link from "next/link";

export default function PagePlanets() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Planets List</h1>
            <PlanetsTable></PlanetsTable>
        </div>
        
    )
}