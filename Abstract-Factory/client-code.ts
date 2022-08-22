import {
  MakeEnterpriseCustomerVehicleFactory,
  MakeIndividualCustomerVehicleFactory,
} from "./factory";

const enterpriseFactory = new MakeEnterpriseCustomerVehicleFactory();
const individualFactory = new MakeIndividualCustomerVehicleFactory();

const vehicle1 = enterpriseFactory.createVehicle("Fusca", "Taiury");
const vehicle2 = individualFactory.createVehicle("Celta", "Rafael");

vehicle1.pickUp(); // Fusca está buscando Taiury (Enterprise Customer) (Enterprise Vehicle)
vehicle2.pickUp(); // Celta está buscando Rafael (Individual Customer) (Individual Vehicle)
