package p1;

public final class finalClass{
    public final int number;
    public finalClass(){
        this.number = 1;
    }

    public final void call(){
        System.out.println("Final method work!");
    }

    public final void getNumber(int number){
        
       // this.number = number;
        System.out.println(this.number);
    }
}

