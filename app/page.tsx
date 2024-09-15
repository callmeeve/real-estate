/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Search, ServerIcon, ShieldCheckIcon, StarHalfIcon, StarIcon, UserCheckIcon } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const properties = [
    {
      id: 1,
      title: "Beautiful Family Home",
      address: "123 Main St, Anytown, USA",
      price: "$350,000",
      image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Luxury Beachfront Condo",
      address: "456 Ocean Blvd, Beach City, USA",
      price: "$750,000",
      image: "https://images.unsplash.com/photo-1708261582027-c0eb2fd8be13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Cozy Mountain Cabin",
      address: "789 Mountain Rd, Pine Valley, USA",
      price: "$250,000",
      image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]
  return (
    <>
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Semi-transparent overlay */}
        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Find Your Dream Home
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Discover the perfect property that fits your lifestyle and budget.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1 bg-white/90 placeholder-gray-500" placeholder="Enter location" type="text" />
                <Button type="submit" variant="default">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-foreground absolute bottom-0 left-0 right-50 hidden lg:flex justify-center rounded-tr-xl p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center space-y-2 border-r border-white pr-5">
              <h2 className="text-2xl font-bold text-white">100+</h2>
              <p className="text-white">Properties</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-r border-white pr-5">
              <h2 className="text-2xl font-bold text-white">50+</h2>
              <p className="text-white">Agents</p>
            </div>
            <div className="flex flex-col items-center space-y-2 pr-5">
              <h2 className="text-2xl font-bold text-white">25+</h2>
              <p className="text-white">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-2">Featured Properties</h2>
          <p className="text-center text-gray-500 max-w-[800px] mx-auto mb-12">
            Check out our featured properties. Find the perfect home that fits your lifestyle and budget.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, idx) => (
              <Card key={idx}>
                <Image
                  alt="Property"
                  className="object-cover w-full h-60 rounded-t-lg"
                  height="300"
                  src={property.image}
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">{property.title}</h3>
                  <p className="text-sm text-gray-500">{property.address}</p>
                  <p className="text-lg font-bold mt-2">{property.price}</p>
                </CardContent>
                <CardFooter className="p-4">
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-2">Why You Should Work With Us</h2>
          <p className="text-center text-gray-500 max-w-[800px] mx-auto mb-12">
            We are committed to providing exceptional service to our clients. Here are a few reasons why you should work with us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center space-y-2">
              <ShieldCheckIcon className="text-foreground h-12 w-12" />
              <h3 className="text-lg font-bold">Expert Agents</h3>
              <p className="text-gray-500 text-center">Our team of expert agents will guide you through the process of buying or selling your home.</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <ServerIcon className="text-foreground h-12 w-12" />
              <h3 className="text-lg font-bold">Customized Service</h3>
              <p className="text-gray-500 text-center">We provide personalized service to ensure that you find the perfect property that fits your needs.</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <UserCheckIcon className="text-foreground h-12 w-12" />
              <h3 className="text-lg font-bold">Local Expertise</h3>
              <p className="text-gray-500 text-center">Our agents have extensive knowledge of the local real estate market to help you make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full py-12 md:py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bg2.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Semi-transparent overlay */}
        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl text-background font-bold tracking-tighter sm:text-5xl">Ready to Find Your Dream Home?</h2>
              <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let our expert agents guide you through the process. Contact us today!
              </p>
            </div>
            <Button variant="default" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-12 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-2">Testimonials</h2>
          <p className="text-center text-gray-500 max-w-[800px] mx-auto mb-12">
            Don't just take our word for it. Here's what our clients have to say about working with us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-gray-500 mb-4">
                "I had a great experience working with the team at Dream Homes. They helped me find the perfect property that fit my budget and lifestyle."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <Image
                    alt="User"
                    className="object-cover w-full h-full"
                    height="48"
                    src="https://xsgames.co/randomusers/avatar.php?g=pixel" // Random user image
                    width="48"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Jane Doe</h3>
                  <p className="text-gray-500">Home Buyer</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <StarIcon className="text-yellow-500 h-6 w-6" />
                <StarIcon className="text-yellow-500 h-6 w-6" />
                <StarIcon className="text-yellow-500 h-6 w-6" />
                <StarIcon className="text-yellow-500 h-6 w-6" />
                <StarIcon className="text-yellow-500 h-6 w-6" />
              </div>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-gray-500 mb-4">
                "The team at Dream Homes was very professional and knowledgeable. They helped me sell my home quickly and for a great price."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <Image
                    alt="User"
                    className="object-cover w-full h-full"
                    height="48"
                    src="https://xsgames.co/randomusers/avatar.php?g=male" // Random user image
                    width="48"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">John Smith</h3>
                  <p className="text-gray-500">Home Seller</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <StarIcon className="text-yellow-500 h-6 w-6" />
                <StarIcon className="text-yellow-500 h-6 w-6" />
                <StarIcon className="text-yellow-500 h-6 w-6" />
                <StarIcon className="text-yellow-500 h-6 w-6" />
                <StarIcon className="text-yellow-500 h-6 w-6" />
              </div>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-gray-500 mb-4">
                "I highly recommend Dream Homes to anyone looking to buy or sell a home. They are the best in the business!"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <Image
                    alt="User"
                    className="object-cover w-full h-full"
                    height="48"
                    src="https://xsgames.co/randomusers/avatar.php?g=female" // Random user image
                    width="48"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Sarah Johnson</h3>
                  <p className="text-gray-500">Home Buyer</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <StarIcon className="text-yellow-500 h-6 w-6" />
                <StarIcon className="text-yellow-500 h-6 w-6" />
                <StarIcon className="text-yellow-500 h-6 w-6" />
                <StarIcon className="text-yellow-500 h-6 w-6" />
                <StarHalfIcon className="text-yellow-500 h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-12 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-2">Contact Us</h2>
          <p className="text-center text-gray-500 max-w-[800px] mx-auto mb-12">
            Have a question or need assistance? Contact us today and one of our expert agents will be happy to help.
          </p>
          <div className="max-w-[800px] mx-auto">
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
              <form className="space-y-4">
                <Input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" type="text" />
                <Input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" type="email" />
                <Input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone" type="tel" />
                <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Message" rows={4} />
                <Button type="submit" variant="default" className="w-full p-3 rounded-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}