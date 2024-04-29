export default function RestaurantEventCard({ restaurant, idx }) {

    return (
        <div className="RestaurantEventCard">
            <h1>Card here</h1>
            {/* {restaurant.results} */}
            IDX:{restaurant[idx]} <br />
            NAME:{restaurant.name} <br />
            FSQ_ID:{restaurant.fsq_id} <br />
            distance:{restaurant.distance} <br />
            latitude:{restaurant.geocodes.main.latitude} &nbsp
            longitude:{restaurant.geocodes.main.longitude} <br />
            formatted_address:{restaurant.location.formatted_address} <br />
            {/* restaurant.categories.id: { (restaurant.categories) ? restaurant.categories.id : "No  ID available"} <br /> */}
            restaurant.categories.icon: {(restaurant.categories[0].icon) ? restaurant.categories[0].icon.prefix : "No  icon available"} <br />
            restaurant.categories.icon: {(restaurant.categories[0].icon) ? restaurant.categories[0].icon.suffix : "No  icon available"} <br />
            restaurant.categories.name: {(restaurant.categories[0].name) ? restaurant.categories[0].name : "No  name available"} <br />
            {/* restaurant.catergories.short_name: { (restaurant.catergories) ? restaurant.catergories[0].short_name : "No  short_name available"} <br />
            restaurant.catergories.plural_name: { (restaurant.catergories) ? restaurant.catergories[0].plural_name : "No  short_name available"} <br /> */}

            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            {/* <img src="images/sample-1.jpg"> */}
                                <span class="card-title">            NAME:{restaurant.name} <br /></span>
                        </div>
                        <div class="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>



        </div>


    )
}