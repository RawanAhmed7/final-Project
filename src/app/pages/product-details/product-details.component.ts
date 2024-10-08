import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  details:any
  img:any
  dddd:any
  constructor(private activated:ActivatedRoute ,public global:GlobalService){
    console.log(this.activated.snapshot.paramMap.get("singleId"))

  }
  ngOnInit(){
    // let singleID = this.activated.snapshot.paramMap.get("singleId")
    this.activated.paramMap.subscribe(params=>{
      // console.log(params)
      let ID = params.get('singleId')
      this.global.getProductDetails(ID).subscribe(res=>{
      this.details = res.data[0]

      console.log(this.details)
      console.log(this.details.name)


      })
    })

  }mainImage: string = 'assets/img-main.jpg'; // Replace with your default main image

  // Quantity for product
  quantity: number = 1;

  // Function to change the main image when a thumbnail is clicked
  changeMainImage(imageUrl: string) {
    this.mainImage = imageUrl;
  }

  // Increase quantity
  increaseQuantity() {
    this.quantity++;
  }

  // Decrease quantity
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }











  images: any= [
    'https://s3-alpha-sig.figma.com/img/1490/1cca/de638588f27b571d7565fbaacfe57243?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HSzRmbb9mwAt~-NzlkkPlc4yZZbi45U1r~e-Eol0K6doFSVBNR0a8cz1HA7q-veRiBmafBaozgoHHixAexF6XqTjN0O~0vu-twhlI4Y7CjJsrVTQbMRvwPhNhOjdnv4XdF21zOI51vZ2eWX97UgSnqUVBCz9z7bFOpT3jRuKkyKAVtBB2XBe7hcMcpZARMvmLyY3nl5NdA0sLakQapzRntMleJFDTkNimEvb4MHdyFgFDchd0imAq7XbZhz36Zq5JGXvAVWriyMuVkfYYtOmVb2dNRZV0X4Li9amK40~7G1VOK6hG8PfJqwYXSdxlF9U~9VDogB2SW2MqmmITRNd9A__',
    'https://s3-alpha-sig.figma.com/img/ca92/325b/4d31381f7fe4841786f4511bd4849d87?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PieeUtrB0kxYT2AfVN1pj7uqsbkxR1eJWs~CKvdQY8QoVpvpy~sSfQfxp3TtNuFWRTU0D5NAy3zdH1t3jjACuDm5yLs9jQdfEEL4a1LglZxOWyOUVJ6~znbOVBqqnBnZCi5vYmpdJ86CVMfafU-eLUzvG1MizYwHa30BtGR-32ui5Yj5~Hhrkqgh1ht59bqpqR37sTmYwWlHiso26zW530RI-igtMu58oTGqZ~0fk1sWEsgfG5oW~VN~6uZ1VO2RtyVo0zf7ohREsIYoa72gW-kJCrBgr-614trOIpUT66MfazdxX7PZwAJJttSCmblrzseJ0LCrqYdlaLA8WelI7A__',
    'https://s3-alpha-sig.figma.com/img/bdcf/fcaa/9b23a76cbe02748d2090a0b9a11cf0a5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CYuAxy3dTFzMvgFvHxa1BPhpraxPT-uKf47-L1tbO8IbLbsZTkrSrgx0~2qb41BvFUp5asUn2g8mTk3IeSDRMYofmgwBbtdXJn7gavMOHn9QRcLp8045ETF3LmwAXTEGcKwVBuOsvTE6HPi5w0kfysfj55~r6nmCz2uvSed44rw~B3VYSvKIo2EV~lfndaaYVEE0MlBZ6WhyTYHbC0EUgBvUk8DdtrqFq9YrPsIJC4S29GHS4rq8bPdcCoroziBnDM2xsZzikLRSu2WzXApLhI1f4-wEtp2diJMwKyn9L6jkV6TN4Ldm6OfOvq8ii277YJgGr3o5H9n8fTzo8y6euA__',
    'https://s3-alpha-sig.figma.com/img/f109/e9ce/a445f7c73ec2a2153e0e149e85ee9d28?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mEhdM7qzUPLxGsH6OavgyOyqTZfkuj0KZpBDfMEcSEOjBV2fPH2svZZ0ehiigPfmjVnh9CPUVAyr9r-kQFHsQeFtslnmrCwJS0eaNe5CDmK~~pA3NV-CXhRp96awgA~1PDwyqAhm0lW0qEIusJkiAljeIUZ62S1w9QxUqxHpKsm7Q7hk0iwgkBjPLDAVnI5dZhLm8UhZ0B~XP6XVoIexqhXsL09DGXD2wmNWF6pVKKi2nWl3Hlt99BV~C78uki8Yt2LCNAcq5V3f5z-3ZmcsDNh4gwpqUXJVKlphyp9NLJ~mAXuMw0-XfQjltDpPpRPWH5yNs~VJuRvfbm0H~KcsvA__',
    'https://s3-alpha-sig.figma.com/img/faa8/0b60/9e3950aed9181acb44510f859f50d850?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VPr6S5StwrtVKcUTX9bWOHi8MufBC9WxFhq5c3BiaUCdhTKUb9IOYxef2PpZJppKcb5WNtTk5P91eEP54ijn-naSnO62WC1Q7WAGcXFflZR1fVcTpM9fSOOwAotzlnGV-R0rFL~FHyOO-bnlMCQyDy8V74X-FjvedLaF2TuUuVwaJWO0GP1LCBEU-4PjlId0iuJdweLPnvvDtL-VilKrmpimK9-QfW5qK84alkK8WzfqUVkBpNQo7YrLZg1vS4XdEtIKCzDmbCjbuLlqe3N4-ETjWJ6v8Jr68dOGFZo614ZAwboG~1hw4S9O3PxsuwXuvlEL5bWZzPn9lGe8dapUow__'
  ];

  selectedImage: number = 0;
  selectedColor: string = 'blue';
  selectedSize: string = 'M';

  selectImage(index: number) {
    this.selectedImage = index;
  }

  selectColor(color: string) {
    this.selectedColor = color;
    console.log(`Selected color: ${color}`);
  }

  selectSize(size: string) {
    this.selectedSize = size;
    console.log(`Selected size: ${size}`);
  }

  products = [
    {
      name: 'HAVIT HV-G92 set',
      image: 'set.jpeg',
      currentPrice: 120,
      oldPrice: 150,
      discount: 20,
      rating: 4,
      reviewsCount: 49
    },
    {
      name: 'AK-900 Wired Keyboard',
      image: 'Keyboard.jpeg',
      currentPrice: 960,
      oldPrice: 1100,
      discount: 35,
      rating: 5,
      reviewsCount: 78
    },
    {
      name: 'IPS LCD Gaming Monitor',
      image: 'monitor.jpeg',
      currentPrice: 370,
      oldPrice: 460,
      discount: 20,
      rating: 4,
      reviewsCount: 99
    },
    {
      name: 'Black HeadPhone',
      image: 'headphone2.jpeg',
      currentPrice: 160,
      oldPrice: 220,
      discount: 27,
      rating: 4,
      reviewsCount: 83
    }
  ];

















}
