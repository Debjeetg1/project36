class Food
{
    constructor( y , width  , height)
    {
        var foodStock , foodLeft;

        this.milkimg = loadImage("images/Milk.png");
        this.y = y;
        this.width = width;
        this.height = height;
        
    }

    // getFoodInfo()
    // {

    // }

    // updateFood()
    // {

    // }

    // deductFood()
    // {

    // }
    
    display()
    {
      if(foodS >= 0)
      {
          for(var i; i <= 10; i += 1)
          {
              rect( i + 20, this.y , this.width , this.height);
              image(this.milkimg, i+ 20 , 200 , 20 ,20 );
          }
      }
    }
}