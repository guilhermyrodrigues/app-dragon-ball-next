'use client'

import { Planets } from "@/model/planets"
import { fetchPlanetsList } from "@/service/PlanetsService"
import { Avatar } from "primereact/avatar"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { useState } from "react"


export default function PlanetsTable() {

    const [planets, setPlanets] = useState<Planets[]>([])

    const getPlanets = async () => {
        const result = await fetchPlanetsList()
        setPlanets(result)
    }

    getPlanets()

    const imageBodyTemplate = (planets: Planets) => {
        return <Avatar image={planets.image} size="xlarge" shape="circle" ></Avatar>
      }
    
      
      const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Planets</span>
        </div>
    );

    return (
        <div className="card">
        <DataTable value={planets} header={header} showGridlines tableStyle={{ minWidth: '50rem' }}>
          <Column header="Image" body={imageBodyTemplate}></Column>
          <Column field="name" header="Name"></Column>
          <Column field="isDestroyed" header="IsDestroyed"></Column>
          <Column field="description" header="Description"></Column>
        </DataTable>
      </div>
    )
}