import React from 'react';
import { Card, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem,
    CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderMenuItem({dish, onClick}) {
    return(
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    
            </Link>
        </Card>
                    
    );
}
  
    

   const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
          <div  className="col-12 col-md-5 m-1">
            <RenderMenuItem dish={dish} />
          </div>
        );
    });


    return (
        <div className="container">
            <div classname="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
            {/*<div className="row">
              <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.state.selectedDish)}
              </div>
            </div>
            <div className="row">
                {this.renderDishComments(this.state.selectedDish)}
    </div>*/}
        </div>
    );
   }
        

export default Menu;