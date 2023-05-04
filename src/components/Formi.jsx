import { Box, Text,Input,FormLabel,useToast } from '@chakra-ui/react'
import React,{useState} from 'react'

//  onsubmit store data into local storage and fetch the data from where 

function Formi({movieName}) {
    const data = JSON.parse(localStorage.getItem("formdata"))
    // console.log(data)
    const toast = useToast()
    const [formdata,setFormdata] = useState({
        //  add if data is available then data otherwise empty

        name:data ? data.name : "",
        email:data ? data.email : "",
        mobile:data ? data.mobile : "",
        noTicket:data ? data.noTicket : "",
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formdata)
        localStorage.setItem("formdata",JSON.stringify(formdata))
        setFormdata(formdata)
        toast({
            title: "Form Submitted.",
            message: "Thank you for submitting your form.",
            status: "success",
            duration: 9000,
            isClosable: true,
            })
    }
    //  get data from local storage
    

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }


  return (
  <>
    <Box
       height={{
            base: "100%",
            md: "100%",
            lg: "500px",
            xl: "500px",
       }}
         width="90%" 
         >
         <Text
            fontSize={{
                base: "1rem",
                md: "1rem",
                lg: "2rem",
                xl: "2rem",
            }} 
            color="white"
            textAlign="center"
            // bg="red.700"
            p="1rem"
            borderRadius="10px"
            // width="40%"
            >
           Movie Name :
           <Text
           as="span"
              color="red.400"
                ml="1rem"
                fontSize={{
                    base: "1.3rem",
                    md: "1rem",
                    lg: "2rem",
                    xl: "2rem",
                }}
                fontWeight="bold"

                >
                {movieName}
                </Text>
            </Text>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                width="100%"
            >
                <Box
                    height="100%"
                    width="100%"
                    borderRadius="10px"
             
                    >
                    <form  onSubmit={handleSubmit}>
                    <Box
                        width="100%"
                        display="flex"
                      
                        justifyContent="space-evenly"
                       flexDirection={{
                        base: "column",
                        md: "column",
                        lg: "row",
                        xl: "row",
                       }}
                        p="1rem"
                    >
                        <Box>
                        <FormLabel
                            fontSize="1rem"
                            color="white"
                            >
                            Name
                        </FormLabel>
                        <Input
                            type="text"
                            name="name"
                            value={formdata.name}
                            onChange={handleChange}
                            autoFocus
                            mb=".5rem"
                            width={{
                                base: "100%",
                                md: "100%",
                                lg: "300px",
                                xl: "400px",
                            }}
                            color="white"
                            />
                            </Box>
                            <Box>
                        <FormLabel
                            fontSize="1rem"
                            color="white"
                            >
                            Email
                        </FormLabel>
                        <Input
                            type="email"
                            name="email"
                            value={formdata.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            mb="0.5rem"
                            width={{
                                base: "100%",
                                md: "100%",
                                lg: "300px",
                                xl: "400px",
                            }}
                            color="white"
                            />
                            </Box>
                            </Box>
                        <Box
                             width="100%"
                        display="flex"
                      
                        justifyContent="space-evenly"
                       flexDirection={{
                        base: "column",
                        md: "column",
                        lg: "row",
                        xl: "row",
                       }}
                        p="1rem"
                            >
                            <Box>
                        <FormLabel
                            fontSize="1rem"
                            color="white"
                            >
                            Mobile
                        </FormLabel>
                        <Input
                            type="number"
                            name="mobile"
                            value={formdata.mobile}
                            onChange={handleChange}
                            placeholder="Enter your mobile number"
                            width={{
                                base: "100%",
                                md: "100%",
                                lg: "300px",
                                xl: "400px",
                            }}
                            mb="0.5rem"
                            color="white"
                            />
                            </Box>
                            <Box>
                        <FormLabel
                            fontSize="1rem"
                            color="white"
                            >
                            No of Tickets
                        </FormLabel>
                        <Input
                            type="number"
                            name="noTicket"
                            value={formdata.noTicket}
                            onChange={handleChange}
                            placeholder="Enter no of tickets"
                            mb="0.5rem"
                            width={{
                                base: "100%",
                                md: "100%",
                                lg: "300px",
                                xl: "400px",
                            }}
                            color="white"
                            />
                            </Box>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                marginTop={{
                                    base: "1rem",
                                    md: "1rem",
                                    lg: "2rem",
                                    xl: "2rem",
                                }}
                                pb={{
                                    base: "1rem",
                                    md: "1rem",
                                    lg: "2rem",
                                    xl: "2rem",
                                }}
                                >
                        <Input
                            type="submit"
                            value="Submit"
                            bg="green"
                            color="white"
                            fontSize="1rem"
                            fontWeight="bold"
                            borderRadius="10px"
                            p="0.5rem"
                            cursor="pointer"
                            // onClick={handleSubmit}
                            width={{
                                base: "100%",
                                md: "100%",
                                lg: "300px",
                                xl: "400px",
                            }}
                            />
                            </Box>
                    </form>
                    </Box>
                    </Box>
        

        </Box>
  </>
  )
}

export default Formi