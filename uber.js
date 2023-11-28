class Uber {
 constructor(pickupLocation, dropOffLocation, rideTime, rideDistance, fuelCostPerGallon, electricityCostPerKwh, fuelConsumptionPerMile, electricityConsumptionPerMile, averageSpeed, currencySymbol) {
    this.pickupLocation = pickupLocation;
    this.dropOffLocation = dropOffLocation;
    this.rideTime = rideTime;
    this.rideDistance = rideDistance;
    this.fuelCostPerGallon = fuelCostPerGallon;
    this.electricityCostPerKwh = electricityCostPerKwh;
    this.fuelConsumptionPerMile = fuelConsumptionPerMile;
    this.electricityConsumptionPerMile = electricityConsumptionPerMile;
    this.averageSpeed = averageSpeed;
    this.currencySymbol = currencySymbol;
 }

 calculateFuelCost() {
    return this.rideDistance * this.fuelConsumptionPerMile * this.fuelCostPerGallon / 100;
 }

 calculateElectricityCost() {
    return this.rideDistance * this.electricityConsumptionPerMile * this.electricityCostPerKwh / 1000;
 }

 calculateDistance() {
    const R = 6371; // Earth's radius in km
    const dLat = this.dropOffLocation.lat - this.pickupLocation.lat;
    const dLon = this.dropOffLocation.lng - this.pickupLocation.lng;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.pickupLocation.lat) * Math.cos(this.dropOffLocation.lat) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; 
    return distance * 0.621371; 
 }

 calculateTime() {
    return this.rideDistance / this.averageSpeed; 
 }

 calculateUberPrice() {
    this.rideDistance = this.calculateDistance();
    this.rideTime = this.calculateTime();
    const fuelCost = this.calculateFuelCost();
    const electricityCost = this.calculateElectricityCost();
    const cost = fuelCost + electricityCost;
    return this.currencySymbol + cost.toFixed(2);
 }
}


let uber1 = new Uber({lat: 37.7749, lng: -122.4194}, {lat: 34.0522, lng: -118.2437}, 1.5, 123, 2.5, 0.15, 0.1, 0.1, 55, "$");
console.log(uber1.calculateUberPrice());
