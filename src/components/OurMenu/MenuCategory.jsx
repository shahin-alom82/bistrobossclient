import MenuCarts from '../../contants/MenuCarts';

const MenuCategory = ({item}) => {
      return (
            <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 gap-6">
                        {
                              item.map((item) => <MenuCarts key={item?._id} item={item} />)
                        }
                  </div>
            </div>
      );
};

export default MenuCategory;