import React, { useState } from "react";
import "../../helper.css";
import style from "./Filter.css";
import Pdata from "../Product/Pdata";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/features/data";

const Filter = () => {
const [brands, setBrands] = useState([]);
const [categories, setCategories] = useState([]);

const selectBrand = (brand) => {
	if(brands.includes(brand)){
		let newBrand = brands.filter(brandItem => brand!== brandItem);
		setBrands(newBrand);
		dispatch(filter({type: 'brand', value: newBrand}))
	}else{
		// setBrands(brands.push(brand))
		setBrands([...brands, brand])
		dispatch(filter({type: 'brand', value: [...brands, brand]}))
	}
}
const selectCategory = (category) => {
	if(categories.includes(category)){
		let newBrand = categories.filter(brandItem => category!== brandItem);
		setCategories(newBrand);
		dispatch(filter({type: 'category', value: newBrand}))
	}else{
		// setBrands(brands.push(brand))
		setCategories([...categories, category])
		dispatch(filter({type: 'category', value: [...categories, category]}))
	}
}

  const dispatch = useDispatch();
  return (
    <div className="filter-left-content">
      <div className="position-fixed left-content-border-new">
        <div className="filter-wrapper">
          <div className="container">
            <div className="label-space">
              <input
                type="radio"
                name="gender"
                onClick={() => dispatch(filter({type: 'filter', value:'men'}))}
              />
              <label>Men</label>
              <br />
              <input
                type="radio"
                name="gender"
				onClick={() => dispatch(filter({type: 'filter', value:'women'}))}

              />
              <label>Women</label>
              <br />
              <input
                type="radio"
                name="gender"
				onClick={() => dispatch(filter({type: 'filter', value:'boys'}))}

              />
              <label>Boys</label>
              <br />
              <input
                type="radio"
                name="gender"
				onClick={() => dispatch(filter({type: 'filter', value:'girls'}))}

              />
              <label>Girls</label>
            </div>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="container">
            <h3>Categories</h3>
            <div className="label-space">
              <input
                type="checkbox"
                onClick={() => {
				   selectCategory('shirt')
				  }
				  }
              />
              <label>Tshirts</label>
              <br />
              <input
                type="checkbox"
                onClick={() => {
				   selectCategory('sleepShirt')
				  }
				  }
              />
              <label>Lounge Shirts</label>
              <br />
              
            </div>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="container">
            <h3>Brands</h3>
            <div className="label-space">
              <input type="checkbox" onClick={() => {
				  selectBrand('roadster')
				  }
				  } />
              <label>Roadster</label>
              <br />
              <input type="checkbox" onClick={() => {
				   selectBrand('Friskers')
				  }
				  } />
              <label>Friskers</label>
              <br />
			  <input type="checkbox" onClick={() => {
				   selectBrand('HRX')
				  }
				  } />
              <label>HRX</label>
              <br />
              <input type="checkbox" onClick={() => {
				   selectBrand('U.S.Polo Assn')
				  }
				  } />
              <label>U.S.Polo Assn</label>
              <br />
			  <input type="checkbox" onClick={() => {
				   selectBrand('wrogn')
				  }
				  } />
              <label>WROGN</label>
              <br />
              <input type="checkbox" onClick={() => {
				   selectBrand('Tommy Hilfiger')
				  }
				  } />
              <label>Tommy Hilfiger</label>
              <br />
              <input type="checkbox" onClick={() => {
				   selectBrand('Jack & Jones')
				  }
				  } />
              <label>Jack & Jones</label>
              <br/>
              <input type="checkbox" onClick={() => {
				   selectBrand('HERE&NOW')
				  }
				  } />
              <label>HERE&NOW</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
