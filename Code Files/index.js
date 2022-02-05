
const HarryPicture = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgSEhUSEhgYFRgSFRgYERIYGhgYGBgaGRgZGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhISHzEhISE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDExNDE0NDQ0MTQ0NDExNDE0NDQxMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xAA8EAACAQIEAwYDBQYGAwAAAAABAgADEQQFEiExQVEGImFxgZETMrEUQlKhwQcjM9Hh8BVicpKi8SRjgv/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIhEBAQACAgIDAAMBAAAAAAAAAAECEQMhEjEyQVETInEE/9oADAMBAAIRAxEAPwD2W85CEA4ZyKnCIByEIQAhCEAIQnHYAXJsBAOwlVis4Vfk36np/OUOY5+41FSCFAJ42IO/LhIucipha2WodR7xmpi0W9yLjlz9pjsNnZY6QQCACR5gH1HHeV+eZ1pDKSblSU2+63Df1kzk2rwblc4okEh724gKxI8wBeP4XHU6gvTdH62YXHmOInjuCzFUu1je3ddX0srHmDuDI+Izaorh9ZLA91xZWv0Yjr1l+ReL3KE8tyztXWK6C9m07E7m/Wb/ACPH/GpBzbUNmtwvaPabNLOEIRkIQhACEIQAMIGEAIXhCAF4QhAFQhCAEITl4ByEIQAhCEAS72FzM9mmYljpHy8wCPrJ+eVyiHT8x2A6mYHO8xKXVWvchmI58Nj48dphnld6bYYdbXWKxQKn5QOItztYG8q67o10Y7u6U/PUGP6WlEmYFiLXsAw48zZrRDY2xfn3w4P+635n8phbdt5j0nZcCMa/JFQm3XuJa35yB2orEMKgN/3akC/RgOHtEUcwF3qcGIU/lYypzXFF9Nzfumn7MSsePyKzUVf2shjyjiVywfe9l9+cgVFN/L6RzCVSpsdwbqfJgV/K86WNS8Lizsb7jb2mx7M9pKlJiQQfulSTY9D5zzsOUJB6/nwMsaOKIYeKj35Q2WnvHZ7OTX1fEsrEa1S1rJwvLjD4xHJCMrWJGx6cZ4hhM9c6ASQNPwzyst9xL/DZgwUim5UfMpDLe4IOxMfkm4vWITL9n+0i1AUe4YDWCbWYG1/Ig38JpqdQMLqQR5iVLtBUIQjAMIGEAIQhACEIQBV5y85CAdnIQgBCEIAQhEVT3T5QoZTtVjCjJawuT7b7zDZiNZsVJ6mXmdVGxNZ6dLfTpXVY2FibgHrvLXK8nBsCNQGxJ5mcNu8rXbJJjGPwOUt90HrY39DeLxGVkAi3EWnpi5aijhItfL1PIQ8cjmeLyx8vcfd85W43Cm3A+09TxWWL0+kpMblQa4tKksPqvNGonmI21LwmuxGRnVE/4HbjvNJl0i4MfUoajv5kxykpJ7tl6kzS1sosOEra+CIFrRzKIuB7DE2+ZX87KPYLJescwt/8r/pKYLp3C3/vlOpiev0lbTpdUMY1MipTY3U9fcGbfs12gd2GlbpqAcBuFxx08jfmJ5l9o9Rw26SblWami6spNuB8V5gx70m4x7/TcMLg3BnZSZBmC1RdDdWVWG+4a3eDf8TLuVGQMIThjDsIkRUAIRN4QBUIQjAhCEAIQhACRsyv8NwvEiw9dpJMqMTi9Z0ruL2HTzkZ5TGKxxtqswGWimnG5bj0HgJfYOgFEjKBqC9PrLJBYTLjka55BlkaqAJJYyHi6lgZdTjtAxLgSsrAGPYmpIdR5LfGIzpGWWOu0ZZpNaSI1ZAdpWYjCiW7RiokmmzGIwO/CV1fDD7wt4jj6zVYilKjF0YTLScsJWdqMU2O45GJVr39JJxif18pCK6QOfP/ALmsu3PlNNz+zHONGJFB2Ch72ueJtYL57Cezz5qyVyuJotwtUQk9O8P0n0iGl4+meXssmcJibwvKiChFRrVOhoaDsJy8IaByE5qgxjDsIAwi2BCEIBAzuuUpMV4nuj1mZw9Zw6q19Tcr7AeE0GfOyoCOF95mi/79Wtbu328ON/GcnN7dPD8WmwSb3PGWV5XZYpYFzzNx5cpYMZrxzWKM/karvaV2MfaTqu4lVinteFVhFVXbeRXaLxL3O0jkyXRIGMjs8cYyOwMmqkGuIdpwxDST0aqmQqlO8mPI7bCFChzCiBKYg32t4C/GX+N3JlHWQEkc+ImmN6c2cO5ew+Imrm4BB8TafQSVwABfkJ8+ZbZqqBtu+AfEX5z2AY21hfgLTWVz5NKK4nfjTPU8X4ySuK8ZcSuPixdOpKZcTJFCvtGFprhIPx/H85yAWatedduHrEJbpFkAxKdUxcQJ28CKhOaoaoEq+0ZtRJ32I4cRymaw5Lv1IATh14zSZ3WYKFXSNV73F+ErcooB6l1A0qbk9TOXk1llp0Yf1x20dGnpUL0Eg5jj0Q2Yx3MMQUXYgHleeeZwXZizPaXllJ0OPC5d1q6me07W1AW4C8pcTm6HYsN/GYjFUmudNQb8d5ANOopvqVvUyfJtjjr6btMUGii95lsuxDcz09JeUK3PjJ21k6TFM5cSvr4zTeVtTNyvGOUr0vnURp1lGnaBDsbyWMxUi4N47CmW0ioZFrGSErKw2jFQSbDl2oce9mlJVq3aXedLYXmXLm+0vGOfk6q2y9NVVDex1An0M9KV55ThqpB328Z6RQq9xd9XdG/XaXHPktErWjyYiUn2kx1a8rySvFxMk08RM4uIkvD4jb1jmQXvxjCVX2idlbDWpix1ixih1mCTOj1khM5PWZ+YbgYjxnfjjrMcmdf3eLGcQ84Gv+OOsScQOsyn+MxJzjxi/kgXWYrqe5JComo25knYflLDK6YCarWvv6Smx2I/cIeBfj5DYS/wI7i2/CJnj8q6ct+Ev0z/AGnp1G/hm1vX6CZA9mqtcNUqVwNI2Ug7ny2nplekCDeZzG0LE2G3mYrj3tphlvHxeXZrlVZDZDw4kHj0PhInwqijcE7DoTe25uJvsRgA53uP/pv5xqjkiE303Pjcxzf4vxk72zOTUXZxsbHiCLTY18IESwsNpZZZkOjvEdOIkXO+6SAYtHjlu6ZPF85TYiov3hLzFUr+8q8Tluo6gT7/AKSZO2mXpW06dFjudJ85K+xkfw3BHQxs5MS+oaSOJUqNPsIDLa9MXQ6vAk/lvNOp6rn733D2ExTo1mB8fKXqMHAI5ynwlXXYVEseF5b4WkF4HbzkWtJNKrtCllExjnebrtKl6frMY9Bidhe595pg5uX2m5UAzqGFwTb3m7q90ADYAWlJ2fygJ+9cgt+G3C/Ay1xL3j30yyll1SBUjivIitHVaLZaSfiR6jVkQGKDxixO+OYSHrhHstKsVooVzIXxIoVJFhLBcSY4uKMrg8WHk6CxGJMUte8rlqR1KgBB8YtB6nj8vV6aElrBAABz2lxhk7qjhsPpKjA5itXDq9M3soFr7ggcDLQ1tKgnoPpNMbJdt7bljI5jqoVZlMfjRJudYwgcZkMXib8TIy5HRxceokYnMbbxrAZnUd7UlJsdzbYSmdi5sJrezNahQTRVsl2J1HhytvFO2mVknrbV06xFEM/GxmIzWqWYnxmpzzGKKY07A8JjcVUvz4yssonix1NoqMDxi1ojluIyKfjGdZQ3BuOcn01SHw3TbyiWwrHibyVQrBhHwJXSarUwQHEXkhEEkEAxmolt5OSLd9KrPl/dmUuSYQt+8YbL8vj/AHaX2aU2ddA5mx8o3l69z4Y2C7D0h5f1LHDyy3+HKZsX8hGqlWcLEKxO2prDyEjlo8Z0x/6bPPo7qhrjIeF5Uc58VJIoPeQgYtHtHsJ+qEhfFhGNqkgiAeNu8b1Q0jaUKwji1RIGqOIY/E09Xi9Uio0dDSbAvuz2cPRqKt7ozBXXrcgX856jibHb0niuGezoejqfYz2fEvw8d/ykZdNeO29Mp2nxQU26CY/EuxFztfgJou0NMs7eY+sz2PcqPluF7x8pnO3dOsZpaZJgRYMfOXT0ltYi46WvMxkmfhm+GiMxHlNG9dx81NhsDtvsfKab10my2oGPxTBBTJNlN18B0lPUxBPD9fpJ9esjc7dAZHFJDzHvJqpLIhpWe+7beQkpRcEHfrFfBHKNlrbQOWmsNV0PoPLgfCXdKpcSgrpqsy8Rw8ZNwlbUsPQWDGIqtcRnVOsdpO00zXcKpJ2Fre8hYZWVuBsdwZYLY7NuI/X06RytufKVBjfGbqkx797T0H1kQmFZ7sT4mNzZwZ3dtOAzoMSsVJqCgYu8bEVeIyrwibwj2FOxnIQmqQI4hjYi1MVgPqY8IzTklUk2m4J63QxPxMPSqA3uik+drH87zybTPQ+x7l8HpP3HZR5bH9Znl3GnHezObbvfrKxMOGJ8dvSWeNXex9N+c5gKHzHobTPGOyXpm8LhGwdY1QjVKbg6gouyjfgOfGamn2twhViWdToC7024W+UbcRLCjhQy2Iv6SjzvKqW5C6CenMzaJ1Mr+JVbEYSsqqHokbAd9NXte94ivlFHugKoHHbmJjcVk3Qr7Rg4CohBV2FuYdhb84rNrnFlPVanE5QgVmU2JbSgDHbzmezd3ocWDjptflG1SubKKjizaxb8R2J348ZJw+WC4aoWqN1Zr2tJ1JVSZT3TOExLMAxQqDtvJ+ASwJP4j7XjjUwbAdfpHbafSKl9ktxnGacBidUhOVLLqou20r8ZmJYaF2Xn1MZr1CxJ8doy4m0mnLnyXLr6MmEVpgVlMgDO6okicMNEXqnVa8ZMcpQsByE5CSFOWnCYgNBjNyLBjiRpBeT8PTkZZaBdCnJYWLpJFskxuStGWE9H7Ap/4h8ajfpPOGnqPYdbYJPFnP8AyjPH2i5rhDe4+ksKOFAQkAb2bh4byXiqdxeOUPlt4WikdHl0grXCqbTNZrXJJt7S3xCEEqOp9jK7FYTneFlbY6Z5334RymQdrXj9TC26QRLdIarTd/TZTwtBhFjeJY25xWFctAgDzkd2uYM99okCwk1FoY22jOIeynx2jvjIWPfgPWPGbrPO6xtRi0SWiGaAM205HbzpnBC8CcYxMUYkwgcMEacMFEYK1QnIQCmUxT8vWIWLfl6zQHqEtMNwlRSMsMPUmWcCxQwd4yKojdSrM5DdL7z2DsxQZMJSRgVbRqIPEaiTvML2EyhXZ8VVF0pWKg8GfiPQT0zC1tdNH/Eob3mmtRWM+zRIvaMO+g+E5VezDz3j9ZLiZN70rMbYd7wuJUYioCLSTjmKDSdxxU9PPwmar4sqTe4jmSsekx3kSo3KNJiQ2950VlHifGNr5Fl9ItaRKtTe3WN4jFdP+oyh5kxVnbtKBtuZwnnGQ1/KOyaqQkmRHq03f4eoq4OkE/Kx6eElVH0gseQJ9pmezgNXEa+IDFj77TXhx3bWfP1JFjWplWKsLEGxiQJddoMNYrUHMaT5j+kpQJVmrpy7dtCdM5FSJYxBMU0SRFoySZ1IkzqxwFXhCEZKZYpuUSJ0zQFoZIRpHRSTYfzmgyzsvi638Oi9j95u6PcybNhXB49hcM9RwlNWdjwCi5m5y39nB2OIqgDmqC58tRm1yXIMPhv4SWJG7Hdj68ovCmpfsn2PL/hnZ9LO9vxG5/lLfIr/AGShfiaKE+emRO2zWonpYkybkjXw1E/+pPpJy9tZ8Z/pqqN/WT/uyKyXb85NcWWZye15X0y+cEWIMx+LFzxImnzupuQJmMRIaSIbIfxToU23JjhESEvK2rRAEFSOhd4tEk7VMQiRYEWogzWho5FTn1XTSYc2BUesc7IZX8GlqYd5zq8hyHtGRQ+01wPuIbnoT0moopYcPKdfFjqOTny3lpzEUNaGmeY2PRhwmSqKVJVtiDYzaoJFzXJ/jgPTsHA8tY6HxlZY77jBk4ATtWg6NpdWUjkRaJBmVgBESRFMYmLQJIiYpom0ALwhCB7XOA/Z3jXtrWnSH+d9/wDaBNVln7NqCb4l2rHkE7ijre255TaB4O820EXAZLhqP8KjTU9dIJ9zLA1IyHnQYaB5THqRvIjNYEx7DNtGak7ZU9VFlHNWH5bRvsbiNWFRTxQaCPLaWGfpqSUeS3pksvyMd/8AK3MTPLH7aY3rS+ZrNHGqC0h4qtzEjpibi3PjMLdNZjtVZqq6jaZ6tRB4dZfZgLmVLcZO20ivNKxtDTJDXidHWBw2EEFWPpTMeWlA0ZEkDMax/hpuzbCXa4VmBIGkfiPD+sYo4JAb7k82PE+XQTXDjt7rDk5ZjNT2by3BrTQKOPE+J5yeqRBSOrOqRx27dAilcjhyiSfSJc7escKp9anTrroqDVtsRsw8jM5mfZh0u9I/EXp94enOWoBG6m3QyZh8ay/Nv4j+UMsJkXp57UUgkG4I4g7GNFp6Nj8roYkXNke2zrx9RzmQzLs/VokkjWnJ14evSYZYXE9qkC8LR5ksPWNmSZNoQhDQe4rOVOI9f0nITY3Vi0hCFDlb5D5iScJwHlCEDMZx8hlDk3yVf9Z+sIQ+qf4eb5ZHWEJyX7dUQsd+hlS3GEJLSG2nYQiVC0jycvOEJU9py9VbZh8g8hKpf1hCds9ODL26k439+8ISklc4huXrCEIVLTlOrxMISwk4TjLSv8jeUIScvSXmuO5/6v5yHCE5VkwhCAf/2Q==";
const AijakPicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJT-f9XUQr98dpDgX1TwrAwHqqt-exnracQcgO1zNTLh4C1WzDll_g8Dlv138SolPs_8&usqp=CAU"
const AliyaPicture = "data:image/jpeg;base64,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";
const abcPicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qdjOz3Yd0X_dV97PD6hK86tnoG5NTxCSUQ&usqp=CAU"
const xyzPicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25Xlu7P_IdqZcDjXDwjMKf2WUlAkZCULl8g&usqp=CAU"

const AliyaMSGS = ["Hello", "Aliya here",]
const HaryMSGS = ["oh hello", "Harry here"]
const AijakMSGS = ["hi", "Aijak here"]
const abcMSGS = ["hi", "All is well"]
const xyzMSGS = ["ok", "xyz here"]

function chat(name) {

    if (name === 'Aliya') {
        document.getElementsByClassName("member").item(0).style.backgroundColor = "lightblue";
        for (let i = 1; i < 5; i++) {
            document.getElementsByClassName("member").item(i).style.backgroundColor = "";
        }
        document.getElementById('memberimg').src = AliyaPicture
        document.getElementById('chatNameP').innerHTML = `<i class="fa fa-linkedin-square" style="color:blue" aria-hidden="true"></i> Aliya`
        let chatpic = document.getElementsByClassName("chatpic")
        let msgg = document.getElementsByClassName("chatmsgP")

        for (let i = 0; i < AliyaMSGS.length; i++) {
            let msgs = document.createElement("p");
            chatpic.item(i).src = AliyaPicture
            msgg.item(i).innerHTML = AliyaMSGS[i]
        }
    }
    else if (name === 'Hary') {
        for (let i = 0; i < 5; i++) {
            if (i == 1) {
                document.getElementsByClassName("member").item(i).style.backgroundColor = "lightblue";
                continue;
            }
            document.getElementsByClassName("member").item(i).style.backgroundColor = "";
        }

        document.getElementById('chatNameP').innerHTML = `<i class="fa fa-facebook-square" style="color:blue;" aria-hidden="true"></i>  Hary`
        document.getElementById('memberimg').src = HarryPicture

        let chatpic = document.getElementsByClassName("chatpic")
        let msgg = document.getElementsByClassName("chatmsgP")

        for (let i = 0; i < HaryMSGS.length; i++) {
            chatpic.item(i).src = HarryPicture
            msgg.item(i).innerHTML = HaryMSGS[i]
        }
    }
    else if (name === 'ajaik') {

        for (let i = 0; i < 5; i++) {
            if (i == 2) {
                document.getElementsByClassName("member").item(i).style.backgroundColor = "lightblue";
                continue;
            }
            document.getElementsByClassName("member").item(i).style.backgroundColor = "";
        }

        document.getElementById('memberimg').src = AijakPicture
        document.getElementById('chatNameP').innerHTML = `<i class="fa fa-facebook-square" style="color:blue;" aria-hidden="true"></i> Aijak`
        let chatpic = document.getElementsByClassName("chatpic")
        let msgg = document.getElementsByClassName("chatmsgP")

        for (let i = 0; i < AijakMSGS.length; i++) {
            chatpic.item(i).src = AijakPicture
            msgg.item(i).innerHTML = AijakMSGS[i]
        }
    }
    else if (name === 'xyz') {
        for (let i = 0; i < 5; i++) {
            if (i == 3) {
                document.getElementsByClassName("member").item(i).style.backgroundColor = "lightblue";
                continue;
            }
            document.getElementsByClassName("member").item(i).style.backgroundColor = "";
        }

        document.getElementById('memberimg').src = xyzPicture
        document.getElementById('chatNameP').innerHTML = `<i class="fa fa-linkedin-square"<i class=" fa fa-linkedin " style="color:blue"  aria-hidden="true" aria-hidden="true"></i> xyz`
        let chatpic = document.getElementsByClassName("chatpic")
        let msgg = document.getElementsByClassName("chatmsgP")

        for (let i = 0; i < AijakMSGS.length; i++) {
            chatpic.item(i).src = xyzPicture
            msgg.item(i).innerHTML = xyzMSGS[i]
        }
    }
    else {
        for (let i = 0; i < 5; i++) {
            if (i == 4) {
                document.getElementsByClassName("member").item(i).style.backgroundColor = "lightblue";
                continue;
            }
            document.getElementsByClassName("member").item(i).style.backgroundColor = "";
        }

        document.getElementById('memberimg').src = abcPicture
        document.getElementById('chatNameP').innerHTML = `<i class="fa fa-facebook-square" style="color:blue;" aria-hidden="true"></i> abc`
        let chatpic = document.getElementsByClassName("chatpic")
        let msgg = document.getElementsByClassName("chatmsgP")

        for (let i = 0; i < AijakMSGS.length; i++) {
            chatpic.item(i).src = abcPicture
            msgg.item(i).innerHTML = abcMSGS[i]
        }
    }

}