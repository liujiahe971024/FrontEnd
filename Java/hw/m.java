package p1;
import java.util.Date;

public class m{
    public static void main(final String[] args) {
        // ------ Q1 ------
        System.out.println("-------------------------------------");
        final String one = "Algorithms";
        System.out.println(one.substring(2, 4) + " " + one.substring(0, 4));
        System.out.println("-------------------------------------");
        final String compareFirst = "abcd";
        final String compareSecond = "abcd";
        boolean compare = true;
        if (compareFirst.length() != compareSecond.length())
            compare = false;
        else
            for (int i = 0; i < compareFirst.length(); i++) {
                if (compareFirst.charAt(i) != compareSecond.charAt(i)) {
                    compare = false;
                    break;
                }
            }
        System.out.println(compare);
        System.out.println("-------------------------------------");
        final String http = "https://www.amazon.com/demo?test=abc";
        for (final String i : http.split("[:./?=]")) {
            if (i.equals(""))
                continue;
            System.out.print(i + " ");
        }
        System.out.println();
        System.out.println("-------------------------------------");
        final String[] list = new String[] { "aa", "b", "ccc", "dd", "e" };
        final StringBuffer buf = new StringBuffer("");
        for (final String i : list) {
            buf.append(i);
        }
        System.out.println(buf.toString());
        System.out.println("-------------------------------------");
        // ------  Q2 ------
        finalClass a = new finalClass();
        a.call();
        System.out.println("*************************************");
        a.getNumber(5);
        System.out.println("*************************************");
        BookSeller q3 = new BookSeller();
        q3.display();
        System.out.println("*************************************");
    }
}


class database{
    static int id;
    static String isbn;
    static String name;
    static String author;
    static String date;
    static{
        id = 1;
        isbn = "X12312312312";
        name = "Book";
        author = "Bob";
        Date d = new Date();
    }
}

class BookSeller{
    public static class Book{
        static void sellBooks(){
            database book1 = new database();
            System.out.println("id: " + book1.id);
            System.out.println("isbn: " + book1.isbn);
            System.out.println("name: " + book1.name);
            System.out.println("author: " + book1.author);
            System.out.println("date: " + book1.date);
            
        }
    }

    void display(){
        Book inner = new Book();
        inner.sellBooks();
    }
}