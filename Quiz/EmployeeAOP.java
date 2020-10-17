package com.company.edms.config;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class EmployeeAOP {

    @Before("execution(* com.company.edms.util.EmployeeHelper.create*(..))")
    public void loggingCreation(){
        System.out.println("***** EmployeeHelper.createEmployee(*) method is called!");
    }


    @After("execution(* com.company.edms.util.EmployeeHelper.delete*(..))")
    public void afterDeletion(){
        System.out.println("***** EmployeeHelper.deleteEmployee(*) method is called!");
    }

    @Before("execution(* com.company.edms.util.EmployeeHelper.*(..))")
    public void loggingAll(){
        System.out.println("*****ALL EmployeeHelper methods is called!");
    }

    @AfterThrowing(pointcut = "execution(* com.company.edms.util.EmployeeHelper.*(..))", throwing="ex")
    public void handleException(Exception ex){
        System.out.println(ex.getMessage());
        System.out.println("*** Exception caughted in AOP");
    }


}
