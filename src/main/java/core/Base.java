package core;

import java.io.BufferedReader;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;

//Base class- is parent class 
public class Base {
	// In this class we define property of below Classes and will use them to child
	// classes
	// WebDriver
	// Logger
	// Properties class
	public static WebDriver driver;// imported from Selenium
	public static Properties properties;//imported from java.util
	public static Logger logger;//imported from org.apache.log4j.Logger
	private String projectPropertyFilePath = ".\\src\\test\\resources\\InputData\\projectProp.properties";
	private String log4JFilePath = ".\\src\\test\\resources\\InputData\\log4j.properties";
	
	//creating the constructor(helps create an object),
	//inside we are going to create an object of  BufferReader (read the files from property files)
	
	public Base() {
		try {
			
			BufferedReader reader;// imported from java.io.BufferedReader
			//BufferReader reads by characters and FileReader(from Java.io.as well)reads from file
			// BufferReader takes File reader as an argument
			//that the FileReader will open and read the file - SECOND Layer and Then BufferReader will read by characters -THIRD layer
            reader = new BufferedReader(new FileReader(projectPropertyFilePath));            
            //creating an object of properties, it will help open .property files -FIRST layer
			properties = new Properties();
			properties.load(reader);
			reader.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		//next line will get logger file foe us
		logger = logger.getLogger("logger_File");
		//will help to configure log4JFilePath
		PropertyConfigurator.configure(log4JFilePath);
	}
	/**
	 * This method will return value of browser name such as Chrome, Firefox, IE,
	 * and Headless browser
	 * 
	 * @return
	 */
	public static String getBrowserName() {
		String browserName = properties.getProperty("browser");
		return browserName;
	}
	/**
	 * This method will return url of application we use for this Framework.
	 * 
	 * @return
	 */
	public static String getURL() {
		String url = properties.getProperty("url");
		return url;
	}
	/**
	 * This method will return implicitly wait time and parse it to long data type
	 * as Implicitly wait method in Selenium accepts Long dataType.
	 * 
	 * @return
	 */
	public static Long getImpWait() {
		String imptWait = properties.getProperty("implicitlyWait");
		return Long.parseLong(imptWait);
	}
	/**
	 * This method will return pageLoadTime Out wait time and parse it to long data
	 * type as pageLoadTime wait method in selenium accepts Long dataType.
	 * 
	 * @return
	 */
	public static Long getPageLoadTimeOut() {
		String pageLTimeOut = properties.getProperty("pageLoadTimeOut");
		return Long.parseLong(pageLTimeOut);
	}
	/**
	 * This method will initialize the webdriver whenever we call it.
	 */
	public static void initializeDriver() {
		driver.get(getURL());
	}
	/**
	 * This method will Close and quite all windows after each execution.
	 */
	
	public static void tearDown() {
		driver.close();
		driver.quit();
	}
}