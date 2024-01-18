import React from 'react'
import './ourServices.css'
import ServiceCard from '../ServiceCard/ServiceCard'
import machineRepair from '../../Images/pexels-andrea-piacquadio-3846559.jpg'
import newMachines from '../../Images/3.png'
import spareParts from '../../Images/pexels-dan-cristian-pădureț-1476318.jpg'

function OurServices() {
  return (
    <div>
      <ServiceCard imageid = {machineRepair} cardtitle = 'Machinery Repair' alt ='Machinery Repair' />
      <ServiceCard imageid = {newMachines} cardtitle = 'New Machinery Manufacturing' alt ='New Machinery Manufacturing'/>
      <ServiceCard imageid = {spareParts} cardtitle = 'Machinery Spareparts' alt = 'Machinery Spareparts'/>
    </div>
  )
}

export default OurServices
