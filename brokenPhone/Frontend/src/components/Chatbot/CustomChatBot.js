import React from "react";
import ChatBot from "react-simple-chatbot";

function CustomChatBot(props) {
  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };
  let model = '', version = '', Answer1 = '', Answer2 = '',  Answer3 = '';

  const steps = [
    {
      id: "Greet",
      message: "Hello Friend, Welcome to Phone2Cash",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "May I know your name?",
      trigger: "Waiting user input for name"
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Asking options to help"
    },
    {
      id: "Asking options to help",
      message: "Hi {previousValue}, Please click on what you want help with!",
      trigger: "Displaying options to help"
    },
    {
      id: "Displaying options to help",
      options: [
        {
          value: "Please Select Services",
          label: "Get Estimate",
          trigger: () => {
            return 'Get Estimate'
          }
        },
        //ddd
        {
          value: "Need to contact us?",
          label: "Need to contact us?",
          trigger: ()=>{window.location.replace("./contact")}
        
        },
        {
          value: "Have FAQ",
          label: "FAQ can be referred here",
          trigger: ()=>{window.location.replace("./faq")}
        }
      ]
    },
    {
      id: "Get Estimate",
      message: "Your get estimate service is ready",
      trigger: "Display Yes or No"
    },
    {
      id: "Display Yes or No",
      options: [
        {
          value: 1,
          label: "Iphone",
          trigger: () => {
            return "Display iPhone Models"
          }
        },
        {
          value: 2,
          label: "Samsung",
          trigger: () => {

            return "Display Samsung Models"
          }
        },
        {
          value: 3,
          label: "OnePlus",
          trigger: () => {

            return "Display OnePlus Models"
          }
        },
        {
          value: "false",
          label: "Back",
          trigger: () => {
            return "Displaying options to help"
          }
        }
      ]
    }, {
      id: "Display iPhone Models",
      message: "Please select model",
      trigger: () => {
        model = 'iPhone'
        
        return "Displaying iPhone Versions"
      }
    },
    {
      id: "Display Samsung Models",
      message: "Please select model",
      trigger: () => {
        model = 'Samsung'
        return "Displaying Samsung Versions"
      }
    },
    {
      id: "Display OnePlus Models",
      message: "Please select model",
      trigger: () => {
        model = 'OnePlus'
        return "Displaying OnePlus Versions"
      }
    }, {
      id: "Displaying iPhone Versions",
      options: [
        {
          value: 1,
          label: "iPhone 11",
          trigger: "iPhone 11"
        },
        {
          value: 2,
          label: "iPhone 11 pro",
          trigger: "iPhone 11 pro"

        },
        {
          value: 3,
          label: "iPhone 11 pro max",
          trigger: "iPhone 11 pro max"

        }, {
          value: 4,
          label: "iPhone Xs 64GB",
          trigger: "iPhone Xs 64GB"

        },
        {
          value: 5,
          label: "iPhone Xs 256GB",
          trigger: "iPhone Xs 256GB"

        },
        {
          value: 6,
          label: "iPhone Xs 512GB",
          trigger: "iPhone Xs 512GB"

        },
        {
          value: 7,
          label: "iPhone Xs Max 64GB",
          trigger: "iPhone Xs Max 64GB"

        },
        {
          value: 8,
          label: "iPhone Xs Max 256GB",
          trigger: "iPhone Xs Max 256GB"

        },
        {
          value: 9,
          label: "iPhone Xs Max 512GB",
          trigger: "iPhone Xs Max 512GB"

        },
        {
          value: 10,
          label: "iPhone X",
          trigger: "iPhone X"

        },
        {
          value: 11,
          label: "iPhone 8 plus",
          trigger: "iPhone 8 plus"

        },
        {
          value: 12,
          label: "iPhone 8",
          trigger: "iPhone 8"

        },
        {
          value: 13,
          label: "iPhone 7 Plus",
          trigger: "iPhone 7 Plus"

        },
        {
          value: 14,
          label: "iPhone 7",
          trigger: "iPhone 7"

        },
        {
          value: 15,
          label: "iPhone 11 pro max",
          trigger: "iPhone 11 pro max"

        }
      ]
    }, {
      id: "Displaying Samsung Versions",
      options: [
        {
          value: 16,
          label: "Galaxy Note 10+ 512GB",
          trigger: "Galaxy Note 10+ 512GB"

        },
        {
          value: 17,
          label: "Galaxy Note 10+ 256GB",
          trigger: "Galaxy Note 10+ 256GB"

        },
        {
          value: 18,
          label: "Galaxy Note 10 256GB",
          trigger: "Galaxy Note 10 256GB"

        }, {
          value: 19,
          label: "Galaxy Note9 512GB",
          trigger: "Galaxy Note9 512GB"

        },
        {
          value: 20,
          label: "Galaxy Note9 256GB",
          trigger: "Galaxy Note9 256GB"

        },
        {
          value: 21,
          label: "Galaxy A10 32GB",
          trigger: "Galaxy A10 32GB"

        },
        {
          value: 22,
          label: "Galaxy A70 128GB",
          trigger: "Galaxy A70 128GB"

        },
        {
          value: 23,
          label: "Galaxy S8 Plus 64GB",
          trigger: "Galaxy S8 Plus 64GB"

        },
        {
          value: 24,
          label: "Galaxy S8 64GB",
          trigger: "Galaxy S8 64GB"

        },
        {
          value: 25,
          label: "Galaxy S7",
          trigger: "Galaxy S7"

        }
      ]
    }, {
      id: "Displaying OnePlus Versions",
      options: [
        {
          value: 26,
          label: "One plus 7T",
          trigger: "One plus 7T"

        },
        {
          value: 27,
          label: "One plus 7 Pro",
          trigger: "One plus 7 Pro"

        },
        {
          value: 28,
          label: "One plus 7",
          trigger: "One plus 7"

        }, {
          value: 29,
          label: "One plus 6T",
          trigger: "One plus 6T"

        },
        {
          value: 30,
          label: "One plus 6",
          trigger: "One plus 6"
        },
        {
          value: 31,
          label: "One plus 5T",
          trigger: "One plus 5T"
        },
        {
          value: 32,
          label: "One plus 5",
          trigger: "One plus 5"
        }
      ]
    }, {
      id: "iPhone 11",
      message: "Does the device power on?",
      trigger: () => {
        version = 'iphone 11'
      //  alert(version)
        return "Q1"
      }
    },
    {
      id: "iPhone 11 pro",
      message: "Does the device power on?",
      trigger: () => {
        version = 'iphone 11 pro'
        return "Q1"
      }
    },
    {
      id: "iPhone 11 pro max",
      message: "Does the device power on?",
      trigger: () => {
        version = 'iPhone 11 pro max'
        return "Q1"
      }
    },
    {
      id: "iPhone Xs 64GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'iPhone Xs 64GB'
        return "Q1"
      }
    },
    {
      id: "iPhone Xs 256GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'iPhone Xs 256GB'
        return "Q1"
      }
    },
    {
      id: "iPhone Xs 256GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'iPhone Xs 256GB'
        return "Q1"
      }
    },
    {
      id: "iPhone Xs 512GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'iPhone Xs 512GB'
        return "Q1"
      }
    },
    {
      id: "iPhone Xs Max 64GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'iPhone Xs Max 64GB'
        return "Q1"
      }
    },
    {
      id: "iPhone Xs Max 256GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'iPhone Xs Max 256GB'
        return "Q1"
      }
    },
    {
      id: "iPhone Xs Max 512GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'iPhone Xs Max 512GB'
        return "Q1"
      }
    },
    {
      id: "iPhone XR",
      message: "Does the device power on?",
      trigger: () => {
        version = 'iPhone XR'
        return "Q1"
      }
    },
    {
      id: "iPhone X",
      message: "Does the device power on?",
      trigger: () => {
        version = 'iPhone Xs Max 512GB'
        return "Q1"
      }
    },
    {
      id: "iPhone 8 plus",
      message: "Does the device power on?",
      trigger: () => {
        version = 'iPhone 8 plus'
        return "Q1"
      }
    },
    {
      id: "iPhone 8",
      message: "Does the device power on?",
      trigger: () => {
        version = 'iPhone 8'
        return "Q1"
      }
    },
    {
      id: "iPhone 7 Plus",
      message: "Does the device power on?",
      trigger: () => {
        version = 'iPhone Xs Max 512GB'
        return "Q1"
      }
    },
    {
      id: "iPhone 7",
      message: "Does the device power on?",
      trigger: () => {
        version = 'iPhone 7'
        return "Q1"
      }
    },
    {
      id: "Galaxy Note 10+ 512GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'Galaxy Note 10+ 512GB'
        return "Q1"
      }
    },
    {
      id: "Galaxy Note 10+ 512GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'Galaxy Note 10+ 512GB'
        return "Q1"
      }
    },
    {
      id: "Galaxy Note 10+ 256GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'Galaxy Note 10+ 256GB'
        return "Q1"
      }
    },
    {
      id: "Galaxy Note 10 256GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'Galaxy Note 10 256GB'
        return "Q1"
      }
    },
    {
      id: "Galaxy Note9 512GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'Galaxy Note9 512GB'
        return "Q1"
      }
    },
    {
      id: "Galaxy Note9 256GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'Galaxy Note9 256GB'
        return "Q1"
      }
    },
    {
      id: "Galaxy A10 32GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'Galaxy A10 32GB'
        return "Q1"
      }
    },
    {
      id: "Galaxy A70 128GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'Galaxy A70 128GB'
        return "Q1"
      }
    },
    {
      id: "Galaxy S8 Plus 64GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'Galaxy S8 Plus 64GB'
        return "Q1"
      }
    },
    {
      id: "Galaxy S8 64GB",
      message: "Does the device power on?",
      trigger: () => {
        version = 'Galaxy S8 64GB'
        return "Q1"
      }
    },
    {
      id: "Galaxy S7",
      message: "Does the device power on?",
      trigger: () => {
        version = 'Galaxy S7'
        return "Q1"
      }
    },
    {
      id: "One plus 7T",
      message: "Does the device power on?",
      trigger: () => {
        version = 'One plus 7T'
        return "Q1"
      }
    },
    {
      id: "One plus 7 Pro",
      message: "Does the device power on?",
      trigger: () => {
        version = 'One plus 7 Pro'
        return "Q1"
      }
    },
    {
      id: "One plus 7",
      message: "Does the device power on?",
      trigger: () => {
        version = 'One plus 7'
        return "Q1"
      }
    },
    {
      id: "One plus 6T",
      message: "Does the device power on?",
      trigger: () => {
        version = 'One plus 6T'
        return "Q1"
      }
    },
    {
      id: "One plus 6",
      message: "Does the device power on?",
      trigger: () => {
        version = 'One plus 6'
        return "Q1"
      }
    },
    {
      id: "One plus 5T",
      message: "Does the device power on?",
      trigger: () => {
        version = 'One plus 5T'
        return "Q1"
      }
    },
    {
      id: "One plus 5",
      message: "Does the device power on?",
      trigger: () => {
        version = 'One plus 5'
        return "Q1"
      }
    },
    {
      id: "Q1",
      options: [
        {
          value: true,
          label: "true",
          trigger: "Q1 true"
        },
        {
          value: false,
          label: "false",
          trigger: "Q1 false"
        }
      ]
    },
    {
      id: "Q1 true",
      message: "Does the screen fully light up?",
      trigger: () => {
        Answer1 = true
      //  alert(Answer1)
        return "Q2"
      }
    },
    {
      id: "Q1 false",
      message: "Does the screen fully light up?",
      trigger: () => {
        Answer1 = false
      //  alert(Answer1)
        return "Q2"
      }
    },
    {
      id: "Q2",
      options: [
        {
          value: true,
          label: "true",
          trigger: "Q2 true"
          
        },
        {
          value: false,
          label: "false",
          trigger: "Q2 false"
        }
      ]
    },
    {
      id: "Q2 true",
      message: "Are there cracks anywhere?",
      trigger: () => {
        Answer2 = true
      //  alert(Answer2)
        return "Q3"
      }
    },
    {
      id: "Q2 false",
      message: "Are there cracks anywhere?",
      trigger: () => {
        Answer2 = false
       // alert(Answer2)
        return "Q3"
      }
    },
    {
      id: "Q3",
      options: [
        {
          value: true,
          label: "true",
          trigger: "Q3 true"
        },
        {
          value: false,
          label: "false",
          trigger: "Q3 false"
        }
      ]
    },
    {
      id: "Q3 true",
      message: "Thanks your estimate will be ready ....",
      trigger: () => {
        Answer3 = true
//alert(Answer3)
        return "Done"
      }
    },
    {
      id: "Q3 false",
      message: "Thanks your estimate will be ready ....",
      trigger: () => {
        Answer3 = false
       // alert(Answer3)
        return "Done"
      }
    },
   
    
   
    {
      id: "FAQ link",
      options: [
        {
          value: true,
          label:"Hello",
          trigger: "Done"
        },
        {
          value: "false",
          label: "Ask another Question",
          trigger: "Asking options to help"
        }
      ]
    },
    
    {
      id: "send contact details",
      options: [
        {
          value: true,
          label: "You can contact us on duvvurisrihari@gmail.com",
          trigger: "Asking options to help"
        },
        {
          value: "false",
          label: "Ask another Question",
          trigger: "Asking options to help"
        }
      ]
    },
    // {
    //   id: "Asking for Housing Services",
    //   message: "Here is your housing services",
    //   trigger: "Showing services"
    // },
    {
      id: "Showing services",
      options: [
        {
          //   value: true,
          //   label: "Yes",
          //   trigger: () => {
          //     props.eventHandler("tomato");
          //     return "Asking for Mushroom in Pizza";
          value: true,
          label: "Yes",
          trigger: () => {
            let data = { model: 'Oneplus', model: '3T', Q1: 'Yes', Q2: 'Yes', Q3: 'Yes' }
            return "Housing service here";
          }
        },
        {
          value: "false",
          label: "No",
          trigger: "Done"
        }
      ]
    },

    {
      id: "Done",
      message: "Have a great day !!",
      end: true
    }
  ];
  return <ChatBot steps={steps} {...config} />;
}
export default CustomChatBot;
