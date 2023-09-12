import { Box , Button, Flex, Grid, Heading, Image, Input, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import div1 from '../Assets/div1.png'
import div2 from '../Assets/div2.png'
import div3 from '../Assets/div3.png'
import div4 from '../Assets/div4.png'
import div5 from '../Assets/div5.png'
import div6 from '../Assets/div6.png'
import ez from '../Assets/ez.png'

import '../Components/Card.css';

function FormComponent() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  let handleChange=(e)=>{
    // console.log(first)
     setEmail(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform front-end validation
    if (!email) {
      setError('Email is required.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    // Clear any previous errors
    setError('');

    // Make an API request
    try {
      const response = await fetch('http://3.228.97.110:9000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        setSuccess('Form Submitted');
      } else if (response.status === 422) {
        setError('Email ends with @ez.works');
        setSuccess('Fail');
      }
    } catch (error) {
      if(email.includes("ez.works")) {
        setSuccess('Fail');
    }else{
      setSuccess("Form Submitted")
    }
    }
  };

  const isValidEmail = async (email) => {
    // Add your email validation logic here
    // Example: return emailRegex.test(email);
    if(email.includes('@ez.works') || email==''){
           
    return false;
    }
    else {
      try {
        const response = await fetch('http://3.228.97.110:9000/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
      if(response.status === 422) {
          setError('Email ends with @ez.works');
          setSuccess('Fail');
        }
        else if(response.status==200){
          setSuccess('Form Submitted');
        }
      } catch (error) {
        if(email.includes("ez.works")) {
          setSuccess('Fail');
      }else{
        setSuccess("Form Submitted")
      }
      }
      return true;
    }
  };

  return (
    <Flex direction={['column','row','row']} alignItems={'center'} p={'20px'}>
        <Flex direction={'column'} width={['60%','50%','45%']}  gap={'30px'} p={['10px','10px','30px']}>
             <Image src={ez} width={'400px'} height={'110px'}></Image>
             <Heading color={'#112949'} size={'lg'}>Suite Of Business Support Services</Heading>
             <Text size={'20px'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</Text>

             <Flex direction={["column","row","row"]} alignItems={"center"}>
              <Input mb={["20px","0","0"]} onChange={handleChange}
               type='email'
               value={email}
              placeholder='Email Address'></Input>
              <Button onClick={handleSubmit}
               colorScheme='orange' ml={'10px'}
               width={"150px"}
               >Contact Me</Button>
             </Flex>
             {
               success=='Form Submitted' ?  <p style={{marginTop:'-30px', marginLeft:'10px', color:'green'}}>Form Submitted</p> : <></>
               
             }
             {
               success=='Fail' ?  <p style={{marginTop:'-30px', marginLeft:'10px', color:'red'}}>* Invalid Email</p> : <></>
               
             }
        </Flex>


        <SimpleGrid columns={[1,2,3]} gap={'20px'}>
             <Box  className='card card1' p={['10px','10px','20px']} width={["230px","210px","230px"]} borderRadius={'10px'}>
               <Flex gap={'20px'}>
                <Image width={'50px'}  src={div1}></Image>
                <Heading size={'md'} className='HeadingCard'>Presentation Design</Heading>
               </Flex>

               <Text className='Text' pt={'20px'} >Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</Text>           
             </Box >

             <Box  className='card card2' p={['10px','10px','20px']} width={["230px","210px","230px"]}  borderRadius={'10px'}>
             <Flex gap={'30px'}>
                <Image src={div2} width={'50px'}></Image>
                <Heading size={'md'} className='HeadingCard'>Audio - Visual Production</Heading>
               </Flex>

               <Text pt={'20px'}  className='Text'>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</Text>
             </Box >


             <Box  className='card card3' p={['10px','10px','20px']}  width={["230px","210px","230px"]}  borderRadius={'10px'}>
             <Flex gap={'30px'}>
                <Image src={div3} width={'50px'}></Image>
                <Heading size={'md'}  className='HeadingCard'>Translation Services</Heading>
               </Flex>

               <Text pt={'20px'} className='Text'>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</Text>
             </Box >


             <Box  className='card card4' p={['10px','10px','20px']} width={["230px","210px","230px"]}  borderRadius={'10px'}>
             <Flex gap={'30px'}>
                <Image src={div4} width={'50px'}></Image>
                <Heading size={'md'}  className='HeadingCard'>Graphic Design</Heading>
               </Flex>

               <Text pt={'20px'}  className='Text'>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</Text>
             </Box >


             <Box  className='card card5' p={['10px','10px','20px']}  width={["230px","210px","230px"]} borderRadius={'10px'}>
             <Flex gap={'30px'}>
                <Image src={div5} width={'50px'}></Image>
                <Heading size={'md'}  className='HeadingCard'>Research & Analytics</Heading>
               </Flex>

               <Text pt={'20px'}  className='Text'>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</Text>
             </Box >



             <Box  className='card card6' p={['10px','10px','20px']}  width={["230px","210px","230px"]} borderRadius={'10px'}>
             <Flex gap={'30px'}>
                <Image src={div6} width={'50px'}></Image>
                <Heading  size={'md'} className='HeadingCard'>Data Processing</Heading>
               </Flex>

               <Text pt={'20px'}  className='Text'>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</Text>
             </Box >
        </SimpleGrid>
    </Flex>
  );
}

export default FormComponent;























// import { Button, Container, Input } from '@chakra-ui/react'
// import React, { useState } from 'react'

// const Frm = () => {

//   const [email, setEmail] = useState('');

//   let handleChange=(e)=>{
//      setEmail(e.target.value);
//   }

//   let doSubmit=async ()=>{
//     //  console.log(email);
//     try {
//       if(email.includes('@ez.works') || email==''){
//           console.error('wrong format');
//           let resp=await fetch('http://localhost:7000/error');
//           let data= await resp.json();
//           console.log(data);
//       }
//       else{
//         const response = await fetch('http://3.228.97.110:9000/api', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });
//       let data=await response.json();
//       console.log(data);
//       }
//     } catch (error) {
//       alert('Error fetching api');
//     }
//   }
//   return (
//     <Container>
//          <Input placeholder='Enter Email' onChange={handleChange}></Input>
//          <Button onClick={doSubmit}>Submit</Button>
//     </Container>
//   )
// }

// export default Frm




// FormComponent.js

