export default function RestaurantEventCard({ restaurant, idx }) {

    return (
        <div className="RestaurantEventCard">
            <h1>Card here</h1>
            {/* IDX:{restaurant[idx]} <br />
            NAME:{restaurant.name} <br />
            FSQ_ID:{restaurant.fsq_id} <br />
            distance:{restaurant.distance} <br />
            latitude:{restaurant.geocodes.main.latitude} &nbsp
            longitude:{restaurant.geocodes.main.longitude} <br />
            formatted_address:{restaurant.location.formatted_address} <br />
            restaurant.categories.icon: {(restaurant.categories[0].icon) ? restaurant.categories[0].icon.prefix : "No  icon available"} <br />
            restaurant.categories.icon: {(restaurant.categories[0].icon) ? restaurant.categories[0].icon.suffix : "No  icon available"} <br />
            restaurant.categories.name: {(restaurant.categories[0].name) ? restaurant.categories[0].name : "No  name available"} <br />
   */}

   
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img   src={restaurant.categories[0].icon ? `${restaurant.categories[0].icon.prefix}${restaurant.categories[0].icon.suffix}` : "No_icon_available.png"} alt={restaurant.name} />
                                <span class="card-title">NAME:{restaurant.name} </span>
                        </div>
                        <div class="card-content">
                            
                            <p>
                            {restaurant.location.formatted_address}
                                </p>
                        </div>
                        <div class="card-action">
                            <a href="#">Save</a>|
                            <a href="#"> WEB Link</a>
                        </div>
                    </div>
                </div>
            </div>






        </div>


    )
}