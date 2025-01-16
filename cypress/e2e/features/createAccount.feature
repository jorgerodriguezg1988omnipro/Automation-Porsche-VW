Feature: Creacion de cuenta

Scenario: 1. Verificar que un usuario no registrado pueda crear una cuenta
  Given que el usuario está en la página de registro
  When el usuario llena todos los campos requeridos correctamente
  And el usuario hace clic en el botón de "Crear cuenta"
  Then el usuario recibe una confirmación de registro exitoso
  And es redirigido al panel de usuario
#
#Scenario: 2. Verificar que un usuario registrado no pueda crear una cuenta por correo electrónico ya registrado
#  Given que el usuario está en la página de registro
#  When el usuario intenta registrar una cuenta con un correo electrónico que ya existe en el sistema
#  And hace clic en el botón de "Crear cuenta"
#  Then el usuario recibe un mensaje de error indicando que el correo electrónico ya está registrado
#
#Scenario: 3. Verificar que no se pueda crear cuenta cuando tenga campos obligatorios sin diligenciar
#  Given que el usuario está en la página de registro
#  When el usuario deja algunos campos obligatorios vacíos
#  And hace clic en el botón de "Crear cuenta"
#  Then el usuario recibe mensajes de error indicando que los campos son obligatorios
#
#Scenario: 4. Verificar que no se pueda crear cuenta cuando la contraseña es débil
#  Given que el usuario está en la página de registro
#  When el usuario introduce una contraseña que no cumple con los requisitos de seguridad
#  And hace clic en el botón de "Crear cuenta"
#  Then el usuario recibe un mensaje de error sobre la debilidad de la contraseña
#
#Scenario: 5. Verificar que la contraseña sea visible cuando el usuario lo solicite
#  Given que el usuario está en la página de registro
#  When el usuario introduce una contraseña que cumple con los requisitos de seguridad
#  And hace clic en el botón de "Mostrar contraseña"
#  Then el usuario visualiza la contraseña que ingresó
#
#Scenario: 6. Verificar mensaje de error cuando la contraseña no coincide
#  Given que el usuario está en la página de registro
#  When el usuario introduce una contraseña que cumple con los requisitos de seguridad
#  And en repetir contraseña ingresa una contraseña diferente
#  And hace clic en el botón de "Crear cuenta"
#  Then el usuario recibe un mensaje de error informando que la contraseña no es la misma
#
#Scenario: 7. Verificar que se presente mensaje de error cuando la contraseña no cumpla con las diferentes clases de caracteres
#  Given que el usuario está en la página de registro
#  When el usuario introduce una contraseña que no cumple con los requisitos de seguridad ya que tiene caracteres especiales
#  And hace clic en el botón de "Crear cuenta"
#  Then el usuario recibe un mensaje de error informando que la contraseña no cumple con los caracteres establecidos
#
#Scenario: 8. Verificar que permita crear cuenta desde el carrito de compra
#  Given que el usuario está en el carrito de compra
#  When el usuario hace clic en el botón "Realizar compra"
#  And el usuario hace clic en el botón "Registrarse"
#  And el usuario llena todos los campos requeridos correctamente
#  And hace clic en el botón de "Crear cuenta"
#  Then el usuario recibe una confirmación de registro exitoso
#  And es redirigido al checkout